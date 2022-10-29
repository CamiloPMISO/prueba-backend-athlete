import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { AthleteEntity } from './athlete.entity';
import jwtConstants from '../shared/security/constants';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AthleteService {
    constructor(
        @InjectRepository(AthleteEntity)
        private readonly athleteRepository:  Repository<AthleteEntity>,
        private readonly jwtService: JwtService
    ){}

    async findOne(id: string): Promise<AthleteEntity> {
        const athlete: AthleteEntity = await this.athleteRepository.findOne({where: {id}, relations: ['cityOfBirth', 'cityOfResidence', 'sports', 'risks']} );
        if (!athlete)
          throw new BusinessLogicException("The athlete with the given id was not found", BusinessError.NOT_FOUND);
   
        return athlete;
    }

    async findOneByHeaders(headers: Record<string, string>): Promise<{ athlete: AthleteEntity, id: string}> {
        const token = headers.authorization.replace('Bearer ', '');
        const id = this.jwtService.verify(token, {complete: true, secret: jwtConstants.JWT_SECRET }).payload.sub;
        const athlete: AthleteEntity = await this.athleteRepository.findOne({where: {id}, relations: ['cityOfBirth', 'cityOfResidence', 'sports', 'risks']} );
        if (!athlete)
          throw new BusinessLogicException("The athlete with the given token was not found", BusinessError.NOT_FOUND);
   
        return {athlete, id};
    }



    async findOneByEmail(email: string): Promise<AthleteEntity> {
        const athlete: AthleteEntity = await this.athleteRepository.findOne({where: {email}, relations: ['cityOfBirth', 'cityOfResidence', 'sports', 'risks'] } );
        if (!athlete)
            return null;
   
        return athlete;
    }

    async create(athlete: AthleteEntity): Promise<AthleteEntity> {
        return await this.athleteRepository.save(athlete);
    }

    async update(id: string, athlete: AthleteEntity): Promise<AthleteEntity> {
        const persistedAthlete: AthleteEntity = await this.athleteRepository.findOne({where:{id}});
        if (!persistedAthlete)
          throw new BusinessLogicException("The athlete with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.athleteRepository.save({...persistedAthlete, ...athlete});
    }

  async delete(id: string) {
       const athlete: AthleteEntity = await this.athleteRepository.findOne({where:{id}});
       if (!athlete)
         throw new BusinessLogicException("The athlete with the given id was not found", BusinessError.NOT_FOUND);
    
       await this.athleteRepository.remove(athlete);
   }
}
