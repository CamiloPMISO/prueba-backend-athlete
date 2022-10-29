import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { CountryService } from './country.service';

@Controller('country')
@UseInterceptors(BusinessErrorsInterceptor)
export class CountryController {
    constructor(private readonly countryService: CountryService) {}

    @Get()
    async findAll() {
      return await this.countryService.findAll();
    }
  
    @Get(':countryId')
    async findOne(@Param('countryId') countryId: string) {
      return await this.countryService.findOne(countryId);
    }
}
