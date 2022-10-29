import { CityEntity } from '../city/city.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CountryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => CityEntity, (city) => city.country)
  @JoinColumn()
  cities: CityEntity[];
}
