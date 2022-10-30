import { Controller, UseGuards, Headers, Get, Post } from '@nestjs/common';
import { AthleteService } from 'src/athlete/athlete.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TrainingPlanService } from './training-plan.service';

@Controller('training-plan')
export class TrainingPlanController {

    constructor(
        private readonly athleteService: AthleteService,
        private readonly trainingPlanService: TrainingPlanService,
      ) {}
    
      @UseGuards(JwtAuthGuard)
      @Post()
      async createTrainingPlan(@Headers() headers: Record<string, string>) {
        const athlete = await this.athleteService.getAthleteByToken(
          headers.authorization,
        );

        let trainingPlan = await this.trainingPlanService.create(athlete);

        await this.athleteService.setAthleteTrainingPlan( headers.authorization, trainingPlan.id);

        return trainingPlan;
    
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
