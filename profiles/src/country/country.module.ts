import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [CountryService]
})
export class CountryModule {}
