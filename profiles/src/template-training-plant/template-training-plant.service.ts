import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { TemplateTrainingPlantEntity } from './template-training-plant.entity';

@Injectable()
export class TemplateTrainingPlantService {
    constructor(
        @InjectRepository(TemplateTrainingPlantEntity)
        private readonly templateRepository: Repository<TemplateTrainingPlantEntity>,
    ){}

    async findAll(): Promise<TemplateTrainingPlantEntity[]> {
        const templates: TemplateTrainingPlantEntity[] = await this.templateRepository.find({ relations: ["trainingDays"] });
        return templates;
    }

    async findOne(id: string): Promise<TemplateTrainingPlantEntity> {
        const template: TemplateTrainingPlantEntity = await this.templateRepository.findOne({where: {id}, relations: ["trainingDays"] } );
        if (!template)
          throw new BusinessLogicException("The template with the given id was not found", BusinessError.NOT_FOUND);
        return template;
    }

    async findByCity(city: string): Promise<TemplateTrainingPlantEntity[]> {
        const templates: TemplateTrainingPlantEntity[] = await this.templateRepository.find({ where: {city}, relations: ["trainingDays"] });
        return templates;
    }
}
