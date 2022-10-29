import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { Repository } from 'typeorm';
import { SportEntity } from './sport.entity';
import { SportService } from './sport.service';
import { faker } from '@faker-js/faker';

describe('SportService', () => {
  let service: SportService;
  let repository: Repository<SportEntity>;
  let sportList: SportEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [SportService],
    }).compile();

    service = module.get<SportService>(SportService);
    repository = module.get<Repository<SportEntity>>(
      getRepositoryToken(SportEntity),
    );
    await seedDatabase();
  });

  const seedDatabase = async () => {
    repository.clear();
    sportList = [];
    for (let i = 0; i < 5; i++) {
      const sport: SportEntity = await repository.save({
        name: faker.company.name(),
      });
      sportList.push(sport);
    }
  };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return all sports', async () => {
    const sports: SportEntity[] = await service.findAll();
    expect(sports).not.toBeNull();
    expect(sports).toHaveLength(sportList.length);
  });

  it('findOne should return a sport by id', async () => {
    const storedSport: SportEntity = sportList[0];
    const sport: SportEntity = await service.findOne(storedSport.id);
    expect(sport).not.toBeNull();
    expect(sport.name).toEqual(storedSport.name);
  });

  it('findOne should throw an exception for an invalid sport', async () => {
    await expect(() => service.findOne('0')).rejects.toHaveProperty(
      'message',
      'The sport with the given id was not found',
    );
  });
});
