import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Result {
    @PrimaryGeneratedColumn()
    id :number;
    
    @Column()
    title: string;

    @Column()
    description : string;

    @Column()
    egilable : string;
}