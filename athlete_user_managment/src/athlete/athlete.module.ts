import { Module } from '@nestjs/common';
import { AthleteEntity } from './athlete.entity';
import { AthleteService } from './athlete.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import constants from '../shared/security/constants';
import { AuthService } from '../auth/auth.service';
import { AthleteController } from './athlete.controller';
import { SportService } from '../sport/sport.service';
import { CityService } from '../city/city.service';
import { RiskService } from '../risk/risk.service';
import { CityEntity } from 'src/city/city.entity';
import { SportEntity } from 'src/sport/sport.entity';
import { RiskEntity } from 'src/risk/risk.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AthleteEntity, CityEntity, SportEntity, RiskEntity]),
    AthleteModule,
    PassportModule,
    JwtModule.register({
      secret: constants.JWT_SECRET,
      signOptions: { expiresIn: constants.JWT_EXPIRES_IN },
    }),
  ],
  providers: [AthleteService, AuthService, JwtService, CityService, SportService, RiskService],
  exports: [AuthService],
  controllers: [AthleteController],
})
export class AthleteModule {}
