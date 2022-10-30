import { ActivityEntity } from "../activity/activity.entity";
import { TemplateTrainingPlanEntity } from "../template-training-plan/template-training-plan.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TemplateTrainigDayEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    day: number;

    @ManyToMany(() => ActivityEntity, (actvity) => actvity.trainingDays)
    @JoinTable()
    activities: ActivityEntity[];

    @ManyToOne(() => TemplateTrainingPlanEntity, (template) => template.trainingDays)
    templateTrainingPlant: TemplateTrainingPlanEntity;
}
