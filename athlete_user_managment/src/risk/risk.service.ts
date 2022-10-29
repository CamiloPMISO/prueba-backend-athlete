import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { RiskEntity } from './risk.entity';

@Injectable()
export class RiskService {
    constructor(
        @InjectRepository(RiskEntity)
        private readonly riskRepository: Repository<RiskEntity>,
    ){}

    async findAll(): Promise<RiskEntity[]> {
        const risks: RiskEntity[] = await this.riskRepository.find({});
        return risks;
    }

    async findOne(id: string): Promise<RiskEntity> {
        const risk: RiskEntity = await this.riskRepository.findOne({where: {id} } );
        if (!risk)
          throw new BusinessLogicException("The risk with the given id was not found", BusinessError.NOT_FOUND);
        return risk;
    }
}
