import { Body, Controller, Post, Put, Req, UseGuards, UseInterceptors, Headers, Get } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { SimpleAthleteCreationDto } from './dtos/simple-athlete-creation.dto';
import { AthleteEntity, PaymentPlanType } from './athlete.entity';
import { plainToInstance } from 'class-transformer';
import { AthleteService } from './athlete.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CompleteAthleteDataDto } from './dtos/complete-athlete-data.dto';
import { CityService } from '../city/city.service';
import { SportService } from '../sport/sport.service';
import { SportEntity } from '../sport/sport.entity';
import { RiskService } from '../risk/risk.service';
import { RiskEntity } from '../risk/risk.entity';
import { SetAthleteProfilesDto } from './dtos/set-athlete-profiles.dto';
import { SetAthletePlanDto } from './dtos/set-athlete-plan.dto';
import { SetAthleteTrainingPlanDto } from './dtos/set-athlete-training-plan.dto';

@Controller('athlete')
@UseInterceptors(BusinessErrorsInterceptor)
export class AthleteController {
    constructor(private readonly authService: AuthService,
        private readonly athleteService: AthleteService,
        private readonly cityService: CityService,
        private readonly sportService: SportService,
        private readonly riskService: RiskService){}
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req) {
        return this.authService.login(req);
    }

    @Post()
    async create(@Body() athleteDto: SimpleAthleteCreationDto) {
      const athlete: AthleteEntity = plainToInstance(AthleteEntity, athleteDto);
      return this.removeAthletePassword(await this.athleteService.create(athlete));
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getUserByToken(@Headers() headers: Record<string, string>){
        const { athlete } = await this.athleteService.findOneByHeaders(headers);
        return this.removeAthletePassword(athlete)
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async update(@Headers() headers: Record<string, string>, @Body() athleteCompleteData: CompleteAthleteDataDto) {
        const {cityOfBirth, cityOfResidence, sports, ...newData} = athleteCompleteData;
        const cityBirth = await this.cityService.findOne(cityOfBirth);
        const cityResidence = await this.cityService.findOne(cityOfResidence);
        let sportsList: SportEntity[] = []
        sports.forEach(async (sport)=> {
            sportsList.push(await this.sportService.findOne(sport));
        })
        const athleteNewData: AthleteEntity = plainToInstance(AthleteEntity, newData);
        athleteNewData.completed = true;
        athleteNewData.cityOfBirth = cityBirth
        athleteNewData.cityOfResidence = cityResidence;
        athleteNewData.sports = sportsList;
        const imc = athleteNewData.weight / ((athleteNewData.height * athleteNewData.height)/10000);
        
        let athleteRisks: RiskEntity[] = []
        const allRisks = await this.riskService.findAll()
        allRisks.forEach((risk) => {
            if (risk.imcMin <= imc && risk.imcMax >= imc)
                athleteRisks.push(risk)
        })
        
        athleteNewData.risks = athleteRisks

        const { athlete, id } = await this.athleteService.findOneByHeaders(headers);
        athleteNewData.id = id;
        athleteNewData.email = athlete.email;
        athleteNewData.password = athlete.password;
        athleteNewData.paymentPlan = athlete.paymentPlan;
        return this.removeAthletePassword(await this.athleteService.update(id, athleteNewData))
    }

    @UseGuards(JwtAuthGuard)
    @Put('set_profiles')
    async set_profiles(@Headers() headers: Record<string, string>, @Body() profilesInfo: SetAthleteProfilesDto){
        const { athlete, id } = await this.athleteService.findOneByHeaders(headers);

        if(profilesInfo.demographicProfile){
            athlete.demographicProfile = profilesInfo.demographicProfile;
        }

        if(profilesInfo.foodProfile){
            athlete.foodProfile = profilesInfo.foodProfile;
        }

        if(profilesInfo.sportProfile){
            athlete.sportProfile = profilesInfo.sportProfile;
        }

        return this.removeAthletePassword(await this.athleteService.update(id, athlete))
    }

    @UseGuards(JwtAuthGuard)
    @Put('set_plan')
    async set_plan(@Headers() headers: Record<string, string>, @Body() planInfo: SetAthletePlanDto){
        const { athlete, id } = await this.athleteService.findOneByHeaders(headers);
        athlete.paymentPlan =  planInfo.plan;
        return this.removeAthletePassword(await this.athleteService.update(id, athlete))
    }

    @UseGuards(JwtAuthGuard)
    @Put('set_training_plan')
    async set_training_plan(@Headers() headers: Record<string, string>, @Body() trainingPlan: SetAthleteTrainingPlanDto){
        const { athlete, id } = await this.athleteService.findOneByHeaders(headers);
        athlete.trainingPlan =  trainingPlan.id;
        return this.removeAthletePassword(await this.athleteService.update(id, athlete))
    }

    removeAthletePassword(athlete: AthleteEntity) : any {
        const { password, ...result } = athlete
        return result;
    }
}
