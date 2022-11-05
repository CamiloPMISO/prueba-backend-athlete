import { ActivityEntity } from '../activity/activity.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TrainingAdditionalDataEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    started_at: string;

    @Column({ nullable: true })
    ended_at: string;

    @OneToOne(() => ActivityEntity, (template) => template.trainingAdditionalData)
    @JoinColumn()
    activity: ActivityEntity
}
