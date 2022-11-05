import { ActivityEntity } from "../activity/activity.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TrainingPlanEntity } from "../training-plan/training-plan.entity";

@Entity()
export class TrainingDayEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: string;

    @ManyToMany(() => ActivityEntity, (actvity) => actvity.trainingDays)
    @JoinTable()
    activities: ActivityEntity[];

    @ManyToOne(() => TrainingPlanEntity, (trainingPlan) => trainingPlan.trainingDays)
    trainingPlan: TrainingPlanEntity;
}
