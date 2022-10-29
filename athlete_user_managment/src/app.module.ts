import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AthleteModule } from './athlete/athlete.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AthleteEntity } from './athlete/athlete.entity';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { CityEntity } from './city/city.entity';
import { CountryEntity } from './country/country.entity';
import { SportModule } from './sport/sport.module';
import { RiskModule } from './risk/risk.module';
import { SportEntity } from './sport/sport.entity';
import { RiskEntity } from './risk/risk.entity';

@Module({
  imports: [
    AuthModule,
    AthleteModule,
    CityModule,
    CountryModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'sportapp',
      entities: [AthleteEntity, CityEntity, CountryEntity, SportEntity, RiskEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
    SportModule,
    RiskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
