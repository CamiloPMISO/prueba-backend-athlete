import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AthleteService } from '../athlete/athlete.service';
import { AuthModule } from '../auth/auth.module';
import constants from '../shared/security/constants';
import { SportProfileController } from './sport-profile.controller';
import { HttpService, HttpModule } from '@nestjs/axios';
import { TemplateTrainingPlantService } from '../template-training-plant/template-training-plant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemplateTrainingPlantEntity } from 'src/template-training-plant/template-training-plant.entity';

@Module({
  imports: [
    HttpModule,
    AuthModule,
    TypeOrmModule.forFeature([TemplateTrainingPlantEntity]),
    JwtModule.register({
      secret: constants.JWT_SECRET,
      signOptions: { expiresIn: constants.JWT_EXPIRES_IN },
    }),
  ],
  controllers: [SportProfileController],
  providers: [JwtService, AthleteService, TemplateTrainingPlantService],
})
export class SportProfileModule {}
