import { Module } from '@nestjs/common';
import { SportService } from './sport.service';
import { SportController } from './sport.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportEntity } from './sport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SportEntity])],
  providers: [SportService],
  controllers: [SportController]
})
export class SportModule {}
