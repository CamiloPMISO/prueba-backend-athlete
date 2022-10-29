import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { SportService } from './sport.service';

@Controller('sport')
@UseInterceptors(BusinessErrorsInterceptor)
export class SportController {
    constructor(private readonly sportService: SportService) {}

    @Get()
    async findAll() {
      return await this.sportService.findAll();
    }
  
    @Get(':sportId')
    async findOne(@Param('sportId') sportId: string) {
      return await this.sportService.findOne(sportId);
    }
}
