import { AthleteEntity } from "../athlete/athlete.entity";
import { CountryEntity } from "../country/country.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CityEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => CountryEntity, (country) => country.cities)
    country: CountryEntity;

    @OneToMany(() => AthleteEntity, (athlete) => athlete.cityOfBirth)
    @JoinColumn()
    athletesCityOfBirth: AthleteEntity[]

    @OneToMany(() => AthleteEntity, (athlete) => athlete.cityOfResidence)
    @JoinColumn()
    athletesCityOfResidence: AthleteEntity[]
}
