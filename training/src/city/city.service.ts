import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { City } from './city';
import { lastValueFrom, map } from 'rxjs';
import { athleteUserManagmentServiceURL } from '../shared/services_urls';

@Injectable()
export class CityService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<City[]> {
    return await lastValueFrom(
      this.httpService
        .get(athleteUserManagmentServiceURL + '/city')
        .pipe(map((response) => response.data)),
    );
  }

  async findOne(id: string): Promise<City> {
    return await lastValueFrom(
      this.httpService
        .get(athleteUserManagmentServiceURL + '/city/' + id)
        .pipe(map((response) => response.data)),
    );
  }
  
}
