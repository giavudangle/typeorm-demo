import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm"; 
import {Classes} from "./Classes";

@Entity() 
export class Student { 

   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   name: string;

   @Column() 
   subjects: string; 
   
   @ManyToMany(type => Classes) 
   @JoinTable({
      name : 'students_to_classes',
      joinColumn:{
         name:'student_id'
      },
      inverseJoinColumn:{
         name:'classed_id'
      }
   }) 
   classes: Classes[];
}