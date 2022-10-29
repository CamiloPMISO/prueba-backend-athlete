import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { SportEntity } from './sport.entity';

@Injectable()
export class SportService {
    constructor(
        @InjectRepository(SportEntity)
        private readonly sportRepository: Repository<SportEntity>,
    ){}

    async findAll(): Promise<SportEntity[]> {
        const sports: SportEntity[] = await this.sportRepository.find({});
        return sports;
    }

    async findOne(id: string): Promise<SportEntity> {
        const sport: SportEntity = await this.sportRepository.findOne({where: {id} } );
        if (!sport)
          throw new BusinessLogicException("The sport with the given id was not found", BusinessError.NOT_FOUND);
        return sport;
    }
}
