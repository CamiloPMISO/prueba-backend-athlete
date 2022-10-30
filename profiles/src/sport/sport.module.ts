import { Module } from '@nestjs/common';
import { SportService } from './sport.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [SportService]
})
export class SportModule {}
