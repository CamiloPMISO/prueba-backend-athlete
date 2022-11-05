import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingAdditionalDataEntity } from '../training-additional-data/training-additional-data.entity';
import { TrainingAdditionalDataService } from '../training-additional-data/training-additional-data.service';
import { ActivityController } from './activity.controller';
import { ActivityEntity } from './activity.entity';
import { ActivityService } from './activity.service';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityEntity, TrainingAdditionalDataEntity])],
  controllers: [ActivityController],
  providers: [ActivityService, TrainingAdditionalDataService]
})
export class ActivityModule {}
