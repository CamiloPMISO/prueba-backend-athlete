import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Country } from './country';
import { lastValueFrom, map } from 'rxjs';
import { athleteUserManagmentServiceURL } from '../shared/services_urls';

@Injectable()
export class CountryService {
    constructor(private readonly httpService: HttpService) {}

    async findAll(): Promise<Country[]> {
      return await lastValueFrom(
        this.httpService
          .get(athleteUserManagmentServiceURL + '/country')
          .pipe(map((response) => response.data)),
      );
    }
  
    async findOne(id: string): Promise<Country> {
      return await lastValueFrom(
        this.httpService
          .get(athleteUserManagmentServiceURL + '/country/' + id)
          .pipe(map((response) => response.data)),
      );
    }
}
