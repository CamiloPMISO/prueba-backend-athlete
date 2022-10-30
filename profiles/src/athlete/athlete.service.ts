import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { Athlete } from './athlete';
import { athleteUserManagmentServiceURL } from '../shared/services_urls';

@Injectable()
export class AthleteService {
  constructor(private readonly httpService: HttpService) {}

  async getAthleteByToken(token: string): Promise<Athlete> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token,
    };
    return await lastValueFrom(
      this.httpService
        .get(athleteUserManagmentServiceURL + '/athlete', { headers })
        .pipe(map((response) => response.data)),
    );
  }
}
