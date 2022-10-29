import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { RiskService } from './risk.service';

@Controller('risk')
@UseInterceptors(BusinessErrorsInterceptor)
export class RiskController {
    constructor(private readonly riskService: RiskService) {}

    @Get()
    async findAll() {
      return await this.riskService.findAll();
    }
  
    @Get(':riskId')
    async findOne(@Param('riskId') riskId: string) {
      return await this.riskService.findOne(riskId);
    }
}
