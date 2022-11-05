import { TrainingDayEntity } from '../training-day/training-day.entity';
import { Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class TrainingPlanEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(() => TrainingDayEntity, (trainingDay) => trainingDay.trainingPlan)
    @JoinColumn()
    trainingDays: TrainingDayEntity[];
}
