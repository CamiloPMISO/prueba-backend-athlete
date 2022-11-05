/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingAdditionalDataEntity } from '../../training-additional-data/training-additional-data.entity';
import { TrainingDayEntity } from '../../training-day/training-day.entity';
import { TrainingPlanEntity } from '../../training-plan/training-plan.entity';
import { ActivityEntity } from '../../activity/activity.entity';
import { PlaceEntity } from '../../place/place.entity';
import { TemplateTrainigDayEntity } from '../../template-training-day/template-trainig-day.entity';
import { TemplateTrainingPlanEntity } from '../../template-training-plan/template-training-plan.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [
      ActivityEntity,
      PlaceEntity,
      TemplateTrainigDayEntity,
      TemplateTrainingPlanEntity,
      TrainingDayEntity,
      TrainingPlanEntity,
      TrainingAdditionalDataEntity
    ],
    synchronize: true,
    keepConnectionAlive: true 
  }),
  TypeOrmModule.forFeature([
    ActivityEntity,
    PlaceEntity,
    TemplateTrainigDayEntity,
    TemplateTrainingPlanEntity,
    TrainingDayEntity,
    TrainingPlanEntity,
    TrainingAdditionalDataEntity
  ]),
];