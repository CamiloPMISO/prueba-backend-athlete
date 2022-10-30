import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { TrainingPlanEntity } from './training-plan.entity';
import { Athlete } from 'src/athlete/athlete';
import { TemplateTrainingPlanService } from '../template-training-plan/template-training-plan.service';
import { TemplateTrainingDayService } from 'src/template-training-day/template-training-day.service';
import { TrainingDayService } from 'src/training-day/training-day.service';

@Injectable()
export class TrainingPlanService {
    constructor(
        @InjectRepository(TrainingPlanEntity)
        private readonly trainingPlanRepository: Repository<TrainingPlanEntity>,
        private readonly templateTrainingService: TemplateTrainingPlanService,
        private readonly templateTrainingDayService: TemplateTrainingDayService,
        private readonly trainingDayService: TrainingDayService,
    ){}

    async findOne(id: string): Promise<TrainingPlanEntity> {
        const trainingPlan: TrainingPlanEntity = await this.trainingPlanRepository.findOne({where: {id}, relations: ["trainingDays"] } );
        if (!trainingPlan)
          throw new BusinessLogicException("The training plan with the given id was not found", BusinessError.NOT_FOUND);

        let trainingDays = [];

        for (const trainingDay of trainingPlan.trainingDays) {  
            const trainingDayComplete =  await this.trainingDayService.findOne(trainingDay.id);

            trainingDays.push(
                {   
                    id :  trainingDayComplete.id,
                    date : trainingDayComplete.date,
                    activities: trainingDayComplete.activities,
                }
            )

        }

        trainingPlan.trainingDays = trainingDays;

        return trainingPlan;
    }

    async create(athlete: Athlete): Promise<TrainingPlanEntity> {

        let trainingPlan: TrainingPlanEntity = await this.trainingPlanRepository.save({});

        let templateTrainingPlan = await this.templateTrainingService.findBySports(athlete.sports);

        let trainingDays = [];

        for (const trainingDay of templateTrainingPlan.trainingDays) {
            const trainingDayComplete =  await this.templateTrainingDayService.findOne(trainingDay.id);

            const today = new Date();

                today.setDate(today.getDate() + trainingDayComplete.day - 1)

                const formatMap = {
                    mm: today.getMonth() + 1,
                    dd: today.getDate(),
                    yyyy: today.getFullYear()
                };

                let date = 'yyyy-mm-dd'.replace(/mm|dd|yyyy/gi, matched => formatMap[matched]);

                await this.trainingDayService.create(
                    {
                        date : date,
                        activities: trainingDayComplete.activities,
                        trainingPlan : trainingPlan
                    }
                );

                trainingDays.push(
                    {
                        date : date,
                        activities: trainingDayComplete.activities
                    }
                )

        }

        trainingPlan.trainingDays =  trainingDays;

        return trainingPlan;
    }

}
