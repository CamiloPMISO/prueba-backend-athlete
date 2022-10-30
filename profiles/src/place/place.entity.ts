import { ActivityEntity } from "../activity/activity.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PlaceEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @OneToMany(() => ActivityEntity, (activity) => activity.place)
    @JoinColumn()
    activities: ActivityEntity[]
}
