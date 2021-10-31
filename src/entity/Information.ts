import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity() 
export class Information {
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   gender: string; 
   
   @Column() 
   country: string; 
}