import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { Repository } from 'typeorm';
import { CountryEntity } from './country.entity';
import { CountryService } from './country.service';

import { faker } from '@faker-js/faker';

describe('CountryService', () => {
  let service: CountryService;
  let repository: Repository<CountryEntity>;
  let countriesList: CountryEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [CountryService],
    }).compile();

    service = module.get<CountryService>(CountryService);
    repository = module.get<Repository<CountryEntity>>(
      getRepositoryToken(CountryEntity),
    );
    await seedDatabase();
  });

  const seedDatabase = async () => {
    repository.clear();
    countriesList = [];
    for (let i = 0; i < 5; i++) {
      const country: CountryEntity = await repository.save({
        name: faker.company.name(),
        cities: [],
      });
      countriesList.push(country);
    }
  };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return all countries', async () => {
    const countries: CountryEntity[] = await service.findAll();
    expect(countries).not.toBeNull();
    expect(countries).toHaveLength(countriesList.length);
  });

  it('findOne should return a country by id', async () => {
    const storedCountry: CountryEntity = countriesList[0];
    const country: CountryEntity = await service.findOne(storedCountry.id);
    expect(country).not.toBeNull();
    expect(country.name).toEqual(storedCountry.name);
  });

  it('findOne should throw an exception for an invalid country', async () => {
    await expect(() => service.findOne('0')).rejects.toHaveProperty(
      'message',
      'The country with the given id was not found',
    );
  });
});
