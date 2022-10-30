import { Module } from '@nestjs/common';
import { RiskService } from './risk.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [RiskService]
})
export class RiskModule {}
