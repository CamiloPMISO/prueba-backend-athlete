import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TemplateTrainigDayEntity } from '../template-training-day/template-trainig-day.entity'

@Entity()
export class TemplateTrainingPlanEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    sports: string;

    @Column()
    profileDescription: string;

    @Column()
    city: string;

    @OneToMany(() => TemplateTrainigDayEntity, (template) => template.templateTrainingPlant)
    @JoinColumn()
    trainingDays: TemplateTrainigDayEntity[];
}
