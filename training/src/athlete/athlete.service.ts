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

  async setAthleteTrainingPlan(token: string, trainingPlanId): Promise<Athlete> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token,
    };
    const body = {
      id : trainingPlanId
    }

    return await lastValueFrom(
      this.httpService
        .put(athleteUserManagmentServiceURL + '/athlete/set_training_plan', body, { headers })
        .pipe(map((response) => response.data)),
    );
  }
}
