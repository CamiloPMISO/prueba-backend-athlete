import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Risk } from './risk';
import { lastValueFrom, map } from 'rxjs';
import { athleteUserManagmentServiceURL } from '../shared/services_urls';

@Injectable()
export class RiskService {
    constructor(private readonly httpService: HttpService) {}

    async findAll(): Promise<Risk[]> {
      return await lastValueFrom(
        this.httpService
          .get(athleteUserManagmentServiceURL + '/risk')
          .pipe(map((response) => response.data)),
      );
    }
  
    async findOne(id: string): Promise<Risk> {
      return await lastValueFrom(
        this.httpService
          .get(athleteUserManagmentServiceURL + '/risk/' + id)
          .pipe(map((response) => response.data)),
      );
    }
}