import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { Sport } from 'src/sport/sport';
import { TemplateTrainigDayEntity } from './template-trainig-day.entity';

@Injectable()
export class TemplateTrainingDayService {
    constructor(
        @InjectRepository(TemplateTrainigDayEntity)
        private readonly templateRepository: Repository<TemplateTrainigDayEntity>,
    ){}


    async findOne(id: string): Promise<TemplateTrainigDayEntity> {
        const template: TemplateTrainigDayEntity = await this.templateRepository.findOne({where: {id}, relations: ["activities"] } );
        if (!template)
          throw new BusinessLogicException("The template with the given id was not found", BusinessError.NOT_FOUND);
        return template;
    }

    async create(trainingDay: TemplateTrainigDayEntity): Promise<TemplateTrainigDayEntity> {

        return await this.templateRepository.save(trainingDay);
    }

}