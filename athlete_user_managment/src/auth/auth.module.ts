import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import constants from '../shared/security/constants';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { AthleteModule } from '../athlete/athlete.module';
import { AthleteService } from '../athlete/athlete.service';
import { AthleteEntity } from '../athlete/athlete.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([AthleteEntity]),
    AthleteModule,
    PassportModule,
    JwtModule.register({
      secret: constants.JWT_SECRET,
      signOptions: { expiresIn: constants.JWT_EXPIRES_IN },
    })
  ],
providers: [AuthService, AthleteService, JwtService, LocalStrategy, JwtStrategy],
exports: [AuthService], controllers: [AuthController]
})
export class AuthModule {}
