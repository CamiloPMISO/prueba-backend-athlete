import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityEntity } from 'src/activity/activity.entity';
import { ActivityService } from 'src/activity/activity.service';
import { AthleteService } from 'src/athlete/athlete.service';
import { PlaceEntity } from 'src/place/place.entity';
import { PlaceService } from 'src/place/place.service';
import { TemplateTrainigDayEntity } from 'src/template-training-day/template-trainig-day.entity';
import { TemplateTrainingDayService } from 'src/template-training-day/template-training-day.service';
import { TemplateTrainingPlanEntity } from 'src/template-training-plan/template-training-plan.entity';
import { TemplateTrainingPlanService } from 'src/template-training-plan/template-training-plan.service';
import { TrainingDayEntity } from 'src/training-day/training-day.entity';
import { TrainingDayService } from 'src/training-day/training-day.service';
import { TrainingPlanController } from './training-plan.controller';
import { TrainingPlanEntity } from './training-plan.entity';
import { TrainingPlanService } from './training-plan.service';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingPlanEntity, TemplateTrainingPlanEntity, TemplateTrainigDayEntity, TrainingDayEntity, ActivityEntity, PlaceEntity]), HttpModule],
  providers: [TrainingPlanService, AthleteService, TemplateTrainingPlanService, TemplateTrainingDayService, TrainingDayService, ActivityService, PlaceService],
  controllers: [TrainingPlanController],
})
export class TrainingPlanModule {}
