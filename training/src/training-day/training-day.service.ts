import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { TrainingDayEntity } from './training-day.entity';


@Injectable()
export class TrainingDayService {
    constructor(
        @InjectRepository(TrainingDayEntity)
        private readonly trainigDayRepository: Repository<TrainingDayEntity>,
    ){}

    async findOne(id: string): Promise<TrainingDayEntity> {
        const template: TrainingDayEntity = await this.trainigDayRepository.findOne({where: {id}, relations: ["activities"] } );
        if (!template)
          throw new BusinessLogicException("The training date with the given id was not found", BusinessError.NOT_FOUND);
        return template;
    }

    async create(trainingDay: any): Promise<TrainingDayEntity> {

        return await this.trainigDayRepository.save(trainingDay);
    }

    async findOneByTrainingPlanAndDate(trainingPlan: string, date: string): Promise<TrainingDayEntity> {
        const template: TrainingDayEntity = await this.trainigDayRepository.findOne({where: {date, trainingPlan: { id : trainingPlan} }, relations: ["activities"] } );
        if (!template)
            throw new BusinessLogicException("Training date not found", BusinessError.NOT_FOUND);
        return template;
    }

}