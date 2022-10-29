import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { CityEntity } from './city.entity';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
    ){}

    async findAll(): Promise<CityEntity[]> {
        const cities: CityEntity[] = await this.cityRepository.find({ relations: ["country"] });
        return cities;
    }

    async findOne(id: string): Promise<CityEntity> {
        const city: CityEntity = await this.cityRepository.findOne({where: {id}, relations: ["country"] } );
        if (!city)
          throw new BusinessLogicException("The city with the given id was not found", BusinessError.NOT_FOUND);
        return city;
    }
}
