import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Sport } from './sport';
import { lastValueFrom, map } from 'rxjs';
import { athleteUserManagmentServiceURL } from '../shared/services_urls';

@Injectable()
export class SportService {
    constructor(private readonly httpService: HttpService) {}

    async findAll(): Promise<Sport[]> {
      return await lastValueFrom(
        this.httpService
          .get(athleteUserManagmentServiceURL + '/sport')
          .pipe(map((response) => response.data)),
      );
    }
  
    async findOne(id: string): Promise<Sport> {
      return await lastValueFrom(
        this.httpService
          .get(athleteUserManagmentServiceURL + '/sport/' + id)
          .pipe(map((response) => response.data)),
      );
    }
}