import { ActivityEntity } from "../activity/activity.entity";
import { TemplateTrainingPlantEntity } from "../template-training-plant/template-training-plant.entity";
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

    @ManyToOne(() => TemplateTrainingPlantEntity, (template) => template.trainingDays)
    templateTrainingPlant: TemplateTrainingPlantEntity;
}
