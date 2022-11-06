import { Controller, UseGuards, Headers, Get, Post, UseInterceptors } from '@nestjs/common';
import { AthleteService } from '../athlete/athlete.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { TrainingPlanService } from './training-plan.service';

@Controller('training-plan')
@UseInterceptors(BusinessErrorsInterceptor)
export class TrainingPlanController {

    constructor(
        private readonly athleteService: AthleteService,
        private readonly trainingPlanService: TrainingPlanService,
      ) {}
    
      @UseGuards(JwtAuthGuard)
      @Post()
      async createTrainingPlan(@Headers() headers: Record<string, string>) {
        console.log("entro crear plan")  
        console.log(headers.authorization)

        try {
            const athlete = await this.athleteService.getAthleteByToken(
                headers.authorization,
              );
              console.log("athleta")
              console.log(athlete)
      
              let trainingPlan = await this.trainingPlanService.create(athlete);
      
              await this.athleteService.setAthleteTrainingPlan( headers.authorization, trainingPlan.id);
      
              return trainingPlan;
         }
         catch (e) {
             console.log("error")
            console.log(e)
         }
    
      }

      @UseGuards(JwtAuthGuard)
      @Get()
      async getTrainingPlan(@Headers() headers: Record<string, string>) {
        const athlete = await this.athleteService.getAthleteByToken(
          headers.authorization,
        );

        return await this.trainingPlanService.findOne(athlete.trainingPlan);
    
      }
}
