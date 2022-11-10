import { Controller, UseGuards, Headers, Get, Param, UseInterceptors, Post, Body, Put, Logger } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AthleteService } from '../athlete/athlete.service';
import { TrainingDayService } from './training-day.service';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { ActivityDto } from '../activity/activity.dto';
import { plainToInstance } from 'class-transformer';
import { ActivityEntity } from 'src/activity/activity.entity';

@Controller('training-day')
@UseInterceptors(BusinessErrorsInterceptor)
export class TrainingDayController {
  constructor(
    private readonly athleteService: AthleteService,
    private readonly trainingDayService: TrainingDayService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get(':date')
  async getDateProgram(
    @Headers() headers: Record<string, string>,
    @Param('date') date: string,
  ) {
    const athlete = await this.athleteService.getAthleteByToken(
      headers.authorization,
    );

    return this.trainingDayService.findOneByTrainingPlanAndDate(
      athlete.trainingPlan,
      date,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post('activities/:date')
  async checkTrainingDayForActivities(
    @Headers() headers: Record<string, string>,
    @Param('date') date: string,
  ) {
    const athlete = await this.athleteService.getAthleteByToken(
      headers.authorization,
    );
    return this.trainingDayService.checkTrainingDayForActivities(
      athlete.trainingPlan,
      date,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Put('activities/:date')
  async saveActivityForADate(
    @Headers() headers: Record<string, string>,
    @Param('date') date: string,
    @Body() activityDto: ActivityDto,
  ) {
    const athlete = await this.athleteService.getAthleteByToken(
      headers.authorization,
    );
    const activity: ActivityEntity = plainToInstance(ActivityEntity, activityDto);
    return this.trainingDayService.addActivityToTrainingDay(
      athlete.trainingPlan,
      date,
      activity
    );
  }
}
