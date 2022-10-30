/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityEntity } from '../../activity/activity.entity';
import { PlaceEntity } from '../../place/place.entity';
import { TemplateTrainigDayEntity } from '../../template-training-day/template-trainig-day.entity';
import { TemplateTrainingPlantEntity } from '../../template-training-plant/template-training-plant.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [
      ActivityEntity,
      PlaceEntity,
      TemplateTrainigDayEntity,
      TemplateTrainingPlantEntity,
    ],
    synchronize: true,
    keepConnectionAlive: true 
  }),
  TypeOrmModule.forFeature([
    ActivityEntity,
    PlaceEntity,
    TemplateTrainigDayEntity,
    TemplateTrainingPlantEntity,
  ]),
];