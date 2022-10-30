/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
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
    ],
    synchronize: true,
    keepConnectionAlive: true 
  }),
  TypeOrmModule.forFeature([
    ActivityEntity,
    PlaceEntity,
    TemplateTrainigDayEntity,
    TemplateTrainingPlanEntity,
  ]),
];