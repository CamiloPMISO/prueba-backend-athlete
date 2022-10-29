import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { CityService } from './city.service';

@Controller('city')
@UseInterceptors(BusinessErrorsInterceptor)
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async findAll() {
    return await this.cityService.findAll();
  }

  @Get(':cityId')
  async findOne(@Param('cityId') cityId: string) {
    return await this.cityService.findOne(cityId);
  }
}
