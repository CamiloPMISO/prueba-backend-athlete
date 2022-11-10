import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { Repository } from 'typeorm';
import { ActivityEntity, ActivityType } from './activity.entity';

import { faker } from '@faker-js/faker/locale/es_MX';
import { PlaceEntity } from '../place/place.entity';

@Injectable()
export class ActivityService {
    constructor(
        @InjectRepository(ActivityEntity)
        private readonly activityRepository: Repository<ActivityEntity>,
    ){}

    async findOne(id: string): Promise<ActivityEntity> {
        const template: ActivityEntity = await this.activityRepository.findOne({where: {id}, relations: ["trainingAdditionalData"] } );
        if (!template)
          throw new BusinessLogicException("The activity with the given id was not found", BusinessError.NOT_FOUND);
        return template;
    }

    async create(activity: ActivityEntity): Promise<ActivityEntity> {
      return await this.activityRepository.save(activity);
    }

    async update(id: string, activity: ActivityEntity): Promise<ActivityEntity> {
        const persistedTraining: ActivityEntity = await this.activityRepository.findOne({where:{id}});
        if (!persistedTraining)
          throw new BusinessLogicException("The activity with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.activityRepository.save({...persistedTraining, ...activity});
    }

    async getRamdomActivities(): Promise<ActivityEntity[]> {
      let activities = [];
      for (let i=0; i<faker.datatype.number({ min: 1, max: 10, precision: 1 }); i++) {
        let activity = this.createRandomActivity();
        delete activity['trainingDays'];
        delete activity['trainingAdditionalData'];
        activities.push(activity);
      }
      return activities;
    }

    private createRandomActivity(): ActivityEntity {
      let place = this.createRandomPlace();
      delete place['activities'];
      return {
        id: faker.datatype.uuid(),
        name: faker.word.adjective() + " " + faker.word.preposition() + " " + faker.name.firstName(),
        description: faker.commerce.productDescription(),
        place: place,
        start_at: this.getDateAndStartAt(2),
        duration: faker.datatype.number({ min: 30, max: 90, precision: 1 }),
        type: ActivityType.TRAINING,
        image: faker.internet.avatar(),
        sport: 'any',
        trainingDays: null,
        trainingAdditionalData: null
      };
    }

    private getDateAndStartAt(id: number): string {
      let date = faker.date.soon().toString();
      return id == 1 ? date.substring(4,15) : date.substring(16,21);
    }

    private createRandomPlace(): PlaceEntity {
      return {
        id: faker.datatype.uuid(),
        name: faker.address.street(),
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        activities: null
      };
    }
}
