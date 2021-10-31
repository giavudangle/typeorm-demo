import {Entity,PrimaryGeneratedColumn,Column, Generated} from 'typeorm'

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    Name: string;

    @Column()
    age: number;
    
    @Column() 
    @Generated("uuid") 
    uuid: string; 
}