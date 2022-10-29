import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { CountryEntity } from './country.entity';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(CountryEntity)
        private readonly countryRepository: Repository<CountryEntity>,
    ){}

    async findAll(): Promise<CountryEntity[]> {
        const countries: CountryEntity[] = await this.countryRepository.find({relations: ['cities']});
        return countries;
    }

    async findOne(id: string): Promise<CountryEntity> {
        const country: CountryEntity = await this.countryRepository.findOne({where: {id} } );
        if (!country)
          throw new BusinessLogicException("The country with the given id was not found", BusinessError.NOT_FOUND);
        return country;
    }
}
