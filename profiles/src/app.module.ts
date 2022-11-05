import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AthleteModule } from './athlete/athlete.module';
import constants from './shared/security/constants';
import { HttpModule } from '@nestjs/axios';
import { AthleteService } from './athlete/athlete.service';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { SportModule } from './sport/sport.module';
import { RiskModule } from './risk/risk.module';
import { ActivityModule } from './activity/activity.module';
import { PlaceModule } from './place/place.module';
import { TemplateTrainingPlantModule } from './template-training-plant/template-training-plant.module';
import { TemplateTrainingDayModule } from './template-training-day/template-training-day.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityEntity } from './activity/activity.entity';
import { PlaceEntity } from './place/place.entity';
import { TemplateTrainigDayEntity } from './template-training-day/template-trainig-day.entity';
import { TemplateTrainingPlantEntity } from './template-training-plant/template-training-plant.entity';
import { SportProfileModule } from './sport-profile/sport-profile.module';

@Module({
  imports: [
    AthleteModule,
    CityModule,
    CountryModule,
    SportModule,
    RiskModule,
    ActivityModule,
    PlaceModule,
    TemplateTrainingPlantModule,
    TemplateTrainingDayModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTRES_HOST ||'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'sportapp_training',
      entities: [
        ActivityEntity,
        PlaceEntity,
        TemplateTrainigDayEntity,
        TemplateTrainingPlantEntity,
      ],
      keepConnectionAlive: true,
    }),
    SportProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
