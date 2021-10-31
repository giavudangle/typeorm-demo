import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

import { Information } from "./Information";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => Information)
    @JoinColumn({name:'information_id'})
    information: Information;
}