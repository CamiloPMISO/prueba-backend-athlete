import { Module } from '@nestjs/common';
import { AthleteService } from './athlete.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [AthleteService],
})
export class AthleteModule {}
