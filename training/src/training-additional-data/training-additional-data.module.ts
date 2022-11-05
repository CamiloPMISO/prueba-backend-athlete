import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingAdditionalDataEntity } from './training-additional-data.entity';
import { TrainingAdditionalDataService } from './training-additional-data.service';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingAdditionalDataEntity])],
  providers: [TrainingAdditionalDataService],
})
export class TrainingAdditionalDataModule {}
