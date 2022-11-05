import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { Repository } from 'typeorm';
import { TrainingAdditionalDataEntity } from './training-additional-data.entity';

@Injectable()
export class TrainingAdditionalDataService {
    constructor(
        @InjectRepository(TrainingAdditionalDataEntity)
        private readonly trainingRepository: Repository<TrainingAdditionalDataEntity>
    ){}

    async findOne(id: string): Promise<TrainingAdditionalDataEntity> {
        const trainingData: TrainingAdditionalDataEntity = await this.trainingRepository.findOne({where: {id}} );
        if (!trainingData)
          throw new BusinessLogicException("The trainingData with the given id was not found", BusinessError.NOT_FOUND);
        return trainingData;
    }
    
    async create(trainingData: any): Promise<TrainingAdditionalDataEntity> {
        return await this.trainingRepository.save(trainingData);
    }

    async update(id: string, trainingData: TrainingAdditionalDataEntity): Promise<TrainingAdditionalDataEntity> {
        const persistedTraining: TrainingAdditionalDataEntity = await this.trainingRepository.findOne({where:{id}});
        if (!persistedTraining)
          throw new BusinessLogicException("The trainingData with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.trainingRepository.save({...persistedTraining, ...trainingData});
    }
}
