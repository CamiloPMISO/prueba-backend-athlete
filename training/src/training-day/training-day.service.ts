import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { TrainingDayEntity } from './training-day.entity';
import { ActivityService } from '../activity/activity.service';
import { ActivityEntity } from '../activity/activity.entity';
import { TrainingPlanEntity } from 'src/training-plan/training-plan.entity';
import { PlaceService } from 'src/place/place.service';


@Injectable()
export class TrainingDayService {
    constructor(
        @InjectRepository(TrainingDayEntity)
        private readonly trainigDayRepository: Repository<TrainingDayEntity>,
        private readonly activityService: ActivityService,
        private readonly placeService: PlaceService,
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
        return await this.getExistingTrainingDay(trainingPlan, date);
    }

    async checkTrainingDayForActivities(trainingPlan: string, date: string): Promise<TrainingDayEntity> {
        let template = await this.getTrainignDayByDate(trainingPlan, date);
        if (!template)
            template = await this.generateNewTrainingDay(trainingPlan, date);
        template.activities = await this.activityService.getRamdomActivities();
        return template;
    }

    async addActivityToTrainingDay(trainingPlan: string, date: string, activity: ActivityEntity): Promise<TrainingDayEntity> {
        let traningDay = await this.getExistingTrainingDay(trainingPlan, date);
        let place = await this.placeService.create(activity.place)
        activity.place = place;
        let newActivity = await this.activityService.create(activity)
        traningDay.activities = [...traningDay.activities, newActivity];
        return await this.trainigDayRepository.save(traningDay);
    }

    private async getExistingTrainingDay(trainingPlan: string, date: string): Promise<TrainingDayEntity> {
        let template = this.getTrainignDayByDate(trainingPlan, date);

        if (!template)
            throw new BusinessLogicException("Training date not found", BusinessError.NOT_FOUND);

        return template;
    }

    private async generateNewTrainingDay(trainingPlan: string, date: string): Promise<TrainingDayEntity> {
        let trainingTmp = new TrainingDayEntity();
        let trainingPlanTmp = new TrainingPlanEntity();
        trainingPlanTmp.id = trainingPlan;
        trainingTmp.date = date;
        trainingTmp.trainingPlan = trainingPlanTmp;
        let newTrainingPlan = await this.create(trainingTmp);
        delete newTrainingPlan['trainingPlan'];
        return newTrainingPlan;
    }

    private async getTrainignDayByDate(trainingPlan: string, date: string): Promise<TrainingDayEntity> {
        let template: TrainingDayEntity = null
        if(trainingPlan && date){
            template = await this.trainigDayRepository.findOne({where: {date, trainingPlan: { id : trainingPlan} }, relations: ["activities"] } );
        }
        return template;
    }
}