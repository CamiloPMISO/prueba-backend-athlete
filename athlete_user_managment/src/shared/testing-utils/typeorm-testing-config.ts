/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiskEntity } from '../../risk/risk.entity';
import { SportEntity } from '../../sport/sport.entity';
import { AthleteEntity } from '../../athlete/athlete.entity';
import { CityEntity } from '../../city/city.entity';
import { CountryEntity } from '../../country/country.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [AthleteEntity, CityEntity, CountryEntity, SportEntity, RiskEntity],
    synchronize: true,
    keepConnectionAlive: true 
  }),
  TypeOrmModule.forFeature([AthleteEntity, CityEntity, CountryEntity, SportEntity, RiskEntity]),
];