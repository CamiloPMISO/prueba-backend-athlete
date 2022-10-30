import { City } from '../city/city';
import { Sport } from '../sport/sport';
import { Risk } from '../risk/risk';

export type Athlete = {
  id: string;
  completed: boolean;
  name: string;
  lastName: string;
  idType: string;
  idNumber: string;
  gender: string;
  weight: number;
  height: number;
  email: string;
  cityOfBirth: City;
  cityOfResidence: City;
  sports: Sport[];
  nutritionType: string;
  trainingPlan: string;
  risks: Risk[];
  paymentPlan: string;
  sportProfile: string;
  demographicProfile: string;
  foodProfile: string;
}