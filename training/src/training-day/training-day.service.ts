import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { TrainingDayEntity } from './training-day.entity';


@Injectable()
export class TrainingDayService {
    constructor(
        @InjectRepository(TrainingDayEntity)
        private readonly traingDayRepository: Repository<TrainingDayEntity>,
    ){}

    async findOne(id: string): Promise<TrainingDayEntity> {
        const template: TrainingDayEntity = await this.traingDayRepository.findOne({where: {id}, relations: ["activities"] } );
        if (!template)
          throw new BusinessLogicException("The template with the given id was not found", BusinessError.NOT_FOUND);
        return template;
    }

    async create(trainingDay: any): Promise<TrainingDayEntity> {

        return await this.traingDayRepository.save(trainingDay);
    }

}