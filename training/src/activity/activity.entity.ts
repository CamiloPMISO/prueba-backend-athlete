import { PlaceEntity } from '../place/place.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TemplateTrainigDayEntity } from '../template-training-day/template-trainig-day.entity'
import { TrainingAdditionalDataEntity } from '../training-additional-data/training-additional-data.entity';

enum ActivityType {
  TRAINING = 'training',
  EVENT = 'event',
}

@Entity()
export class ActivityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: ActivityType;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  duration: number;

  @Column()
  start_at: string;

  @Column()
  sport: string;

  @ManyToOne(() => PlaceEntity, (place) => place.activities)
  place: PlaceEntity;

  @ManyToMany(() => TemplateTrainigDayEntity, (template) => template.activities)
  trainingDays: TemplateTrainigDayEntity[];

  @OneToOne(() => TrainingAdditionalDataEntity, (template) => template.activity)
  trainingAdditionalData: TrainingAdditionalDataEntity;
}
