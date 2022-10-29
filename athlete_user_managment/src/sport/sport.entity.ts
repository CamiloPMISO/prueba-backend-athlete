import { AthleteEntity } from '../athlete/athlete.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SportEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => AthleteEntity, (athlete) => athlete.sports)
  @JoinTable()
  athletes: AthleteEntity[];
}
