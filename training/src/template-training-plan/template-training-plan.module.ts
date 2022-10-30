import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemplateTrainingPlanEntity } from './template-training-plan.entity';
import { TemplateTrainingPlanService } from './template-training-plan.service';

@Module({
  imports: [TypeOrmModule.forFeature([TemplateTrainingPlanEntity])],
  providers: [TemplateTrainingPlanService]
})
export class TemplateTrainingPlanModule {}
