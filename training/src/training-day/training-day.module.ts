import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AthleteService } from '../athlete/athlete.service';
import { TrainingPlanEntity } from '../training-plan/training-plan.entity';
import { TrainingDayController } from './training-day.controller';
import { TrainingDayEntity } from './training-day.entity';
import { TrainingDayService } from './training-day.service';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingPlanEntity, TrainingDayEntity]), HttpModule],
  providers: [AthleteService, TrainingDayService],
  controllers: [TrainingDayController]
})
export class TrainingDayModule {}
