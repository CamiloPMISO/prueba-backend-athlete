import { AthleteEntity } from "../athlete/athlete.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RiskEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    imcMin: number;

    @Column()
    imcMax: number;

    @Column()
    features: string;

    @Column()
    limitations: string;

    @Column()
    howToReduceIt: string;

    @Column()
    risk: number;

    @ManyToMany(() => AthleteEntity, (athlete) => athlete.risks)
    @JoinTable()
    athletes: AthleteEntity[];
}
