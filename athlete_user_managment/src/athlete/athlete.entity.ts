import { CityEntity } from '../city/city.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SportEntity } from '../sport/sport.entity';
import { RiskEntity } from '../risk/risk.entity';

export enum IDType {
  TI = 'ti',
  CC = 'cc',
  CE = 'ce',
  PASSPORT = 'passport',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum PaymentPlanType {
  FREE = 'free',
  MEDIUM = 'medium',
  PREMIUM = 'premium',
}

export enum NutritionType {
  NORMAL = 'normal',
  VEGETARIAN = 'vegetarian',
  VEGAN = 'vegan',
}

@Entity()
export class AthleteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: false })
  completed: boolean;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  lastName: string

  @Column({ nullable: true })
  idType: IDType;

  @Column({ nullable: true })
  idNumber: string;

  @Column({ nullable: true })
  gender: Gender;

  @Column({ nullable: true })
  age: number;

  @Column('numeric', { precision: 7, scale: 2, default: -1 })
  weight: number;

  @Column('numeric', { precision: 7, scale: 2, default: -1 })
  height: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => CityEntity, (city) => city.athletesCityOfBirth)
  cityOfBirth: CityEntity;

  @ManyToOne(() => CityEntity, (city) => city.athletesCityOfResidence)
  cityOfResidence: CityEntity;

  @ManyToMany(() => SportEntity, (sport) => sport.athletes)
  sports: SportEntity[];

  @Column({ nullable: true })
  nutritionType: NutritionType;

  @Column({ nullable: true })
  trainingPlan: string;

  @ManyToMany(() => RiskEntity, (risk) => risk.athletes)
  risks: RiskEntity[];

  @Column({ default: PaymentPlanType.FREE })
  paymentPlan: PaymentPlanType;

  @Column({ nullable: true })
  sportProfile: string;

  @Column({ nullable: true })
  demographicProfile: string;

  @Column({ nullable: true })
  foodProfile: string;
}
