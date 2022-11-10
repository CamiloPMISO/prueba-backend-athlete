import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityService } from 'src/activity/activity.service';
import { PlaceService } from 'src/place/place.service';
import { AthleteService } from '../athlete/athlete.service';
import { TrainingDayController } from './training-day.controller';
import { TrainingDayEntity } from './training-day.entity';
import { TrainingDayService } from './training-day.service';
import { ActivityEntity } from '../activity/activity.entity';
import { PlaceEntity } from 'src/place/place.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingDayEntity, ActivityEntity, PlaceEntity]), HttpModule],
  providers: [AthleteService, TrainingDayService, ActivityService, PlaceService],
  controllers: [TrainingDayController]
})
export class TrainingDayModule {}
