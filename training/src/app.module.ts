import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AthleteModule } from './athlete/athlete.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { SportModule } from './sport/sport.module';
import { ActivityModule } from './activity/activity.module';
import { PlaceModule } from './place/place.module';
import { TemplateTrainingPlanModule } from './template-training-plan/template-training-plan.module';
import { TemplateTrainingDayModule } from './template-training-day/template-training-day.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityEntity } from './activity/activity.entity';
import { PlaceEntity } from './place/place.entity';
import { TemplateTrainigDayEntity } from './template-training-day/template-trainig-day.entity';
import { TemplateTrainingPlanEntity } from './template-training-plan/template-training-plan.entity';
import { TrainingDayModule } from './training-day/training-day.module';
import { TrainingPlanModule } from './training-plan/training-plan.module';
import { TrainingDayEntity } from './training-day/training-day.entity';
import { TrainingPlanEntity } from './training-plan/training-plan.entity';
import { RiskModule } from './risk/risk.module';
import { AuthModule } from './auth/auth.module';
import { TrainingAdditionalDataModule } from './training-additional-data/training-additional-data.module';
import { TrainingAdditionalDataEntity } from './training-additional-data/training-additional-data.entity';


@Module({
  imports: [
    AuthModule,
    AthleteModule,
    CityModule,
    CountryModule,
    SportModule,
    ActivityModule,
    PlaceModule,
    TemplateTrainingPlanModule,
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
        TemplateTrainingPlanEntity,
        TrainingDayEntity,
        TrainingPlanEntity,
        TrainingAdditionalDataEntity
      ],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
    TrainingDayModule,
    TrainingPlanModule,
    RiskModule,
    TrainingAdditionalDataModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
