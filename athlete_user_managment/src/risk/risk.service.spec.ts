import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { Repository } from 'typeorm';
import { RiskEntity } from './risk.entity';
import { RiskService } from './risk.service';

describe('RiskService', () => {
  let service: RiskService;
  let repository: Repository<RiskEntity>;
  let risksList: RiskEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [RiskService],
    }).compile();

    service = module.get<RiskService>(RiskService);
    repository = module.get<Repository<RiskEntity>>(
      getRepositoryToken(RiskEntity),
    );
    await seedDatabase();
  });

  const seedDatabase = async () => {
    repository.clear();
    risksList = [];
    for (let i = 0; i < 5; i++) {
      const risk: RiskEntity = await repository.save({
        imcMin: 5.0,
        imcMax: 5.0,
        features: "",
        limitations: "",
        howToReduceIt: "",
        risk: 10.0,
        athletes: [],
      });
      risksList.push(risk);
    }
  };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return all risks', async () => {
    const risks: RiskEntity[] = await service.findAll();
    expect(risks).not.toBeNull();
    expect(risks).toHaveLength(risksList.length);
  });

  it('findOne should return a risk by id', async () => {
    const storedRisk: RiskEntity = risksList[0];
    const risk: RiskEntity = await service.findOne(storedRisk.id);
    expect(risk).not.toBeNull();
    expect(risk.imcMin).toEqual(storedRisk.imcMin);
    expect(risk.imcMax).toEqual(storedRisk.imcMax);
    expect(risk.features).toEqual(storedRisk.features);
    expect(risk.limitations).toEqual(storedRisk.limitations);
    expect(risk.howToReduceIt).toEqual(storedRisk.howToReduceIt);
    expect(risk.risk).toEqual(storedRisk.risk);
  });

  it('findOne should throw an exception for an invalid risk', async () => {
    await expect(() => service.findOne('0')).rejects.toHaveProperty(
      'message',
      'The risk with the given id was not found',
    );
  });
});
