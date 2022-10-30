import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { TemplateTrainingPlanEntity } from './template-training-plan.entity';
import { Sport } from 'src/sport/sport';

@Injectable()
export class TemplateTrainingPlanService {
    constructor(
        @InjectRepository(TemplateTrainingPlanEntity)
        private readonly templateRepository: Repository<TemplateTrainingPlanEntity>,
    ){}

    async findAll(): Promise<TemplateTrainingPlanEntity[]> {
        const templates: TemplateTrainingPlanEntity[] = await this.templateRepository.find({ relations: ["trainingDays"] });
        return templates;
    }

    async findBySports(sports : Sport[]): Promise<TemplateTrainingPlanEntity> {
        const templates: TemplateTrainingPlanEntity[] = await this.templateRepository.find({ relations: ["trainingDays"] });
        let template = templates.find(t => {
            let templateSports = new Set(t.sports.split('|'));
            const intersection = new Set(
                sports.filter(sport => templateSports.has(sport.id))
              );
            return (intersection.size == sports.length) && (templateSports.size == sports.length); 
        });
        if (!template)
          throw new BusinessLogicException("There is not template for this sports", BusinessError.NOT_FOUND);
        return template;
    }

    async findOne(id: string): Promise<TemplateTrainingPlanEntity> {
        const template: TemplateTrainingPlanEntity = await this.templateRepository.findOne({where: {id}, relations: ["trainingDays"] } );
        if (!template)
          throw new BusinessLogicException("The template with the given id was not found", BusinessError.NOT_FOUND);
        return template;
    }

    async findByCity(city: string): Promise<TemplateTrainingPlanEntity[]> {
        const templates: TemplateTrainingPlanEntity[] = await this.templateRepository.find({ where: {city}, relations: ["trainingDays"] });
        return templates;
    }
}
