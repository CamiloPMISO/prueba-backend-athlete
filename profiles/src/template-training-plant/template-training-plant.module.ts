import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemplateTrainingPlantEntity } from './template-training-plant.entity';
import { TemplateTrainingPlantService } from './template-training-plant.service';

@Module({
  imports: [TypeOrmModule.forFeature([TemplateTrainingPlantEntity])],
  providers: [TemplateTrainingPlantService]
})
export class TemplateTrainingPlantModule {}
