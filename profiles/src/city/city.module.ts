import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [CityService]
})
export class CityModule {}
