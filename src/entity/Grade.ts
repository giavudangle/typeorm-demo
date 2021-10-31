import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Grade {

   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   name: string; 
   
   @Column() 
   title: string; 
   
   @Column() 
   description: string;
   
   
   
   @Column() 
   grading : string; 
}