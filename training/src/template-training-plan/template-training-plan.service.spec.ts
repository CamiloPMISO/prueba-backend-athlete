import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { TemplateTrainingPlanEntity } from './template-training-plan.entity';
import { TemplateTrainingPlanService } from './template-training-plan.service';
import { faker } from '@faker-js/faker';

describe('TemplateTrainingPlantService', () => {
  let service: TemplateTrainingPlanService;
  let repository: Repository<TemplateTrainingPlanEntity>;
  let templateList: TemplateTrainingPlanEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [TemplateTrainingPlanService],
    }).compile();

    service = module.get<TemplateTrainingPlanService>(TemplateTrainingPlanService);
    repository = module.get<Repository<TemplateTrainingPlanEntity>>(
      getRepositoryToken(TemplateTrainingPlanEntity),
    );
    await seedDatabase();
  });

  const seedDatabase = async () => {
    repository.clear();
    templateList = [];
    for (let i = 0; i < 5; i++) {
      const template: TemplateTrainingPlanEntity = await repository.save({
        sports: faker.company.name(),
        profileDescription: faker.company.name(),
        city: faker.company.name(),
        trainingDays: []
      });
      templateList.push(template);
    }
  };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return all templates', async () => {
    const templates: TemplateTrainingPlanEntity[] = await service.findAll();
    expect(templates).not.toBeNull();
    expect(templates).toHaveLength(templateList.length);
  });

  it('findOne should return a template by id', async () => {
    const storedTemplate: TemplateTrainingPlanEntity = templateList[0];
    const template: TemplateTrainingPlanEntity = await service.findOne(storedTemplate.id);
    expect(template).not.toBeNull();
    expect(template.sports).toEqual(storedTemplate.sports);
    expect(template.profileDescription).toEqual(storedTemplate.profileDescription);
    expect(template.city).toEqual(storedTemplate.city);
  });

  it('findOne should throw an exception for an invalid template', async () => {
    await expect(() => service.findOne('0')).rejects.toHaveProperty(
      'message',
      'The template with the given id was not found',
    );
  });
});
