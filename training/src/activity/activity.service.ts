import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { Repository } from 'typeorm';
import { ActivityEntity } from './activity.entity';

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

    async update(id: string, activity: ActivityEntity): Promise<ActivityEntity> {
        const persistedTraining: ActivityEntity = await this.activityRepository.findOne({where:{id}});
        if (!persistedTraining)
          throw new BusinessLogicException("The activity with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.activityRepository.save({...persistedTraining, ...activity});
    }
}
