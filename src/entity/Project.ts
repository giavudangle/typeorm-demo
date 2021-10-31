import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"; 
import {Coder} from "./Coder"; 
@Entity() 
export class Project {  

   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   project: string; 
   
   @ManyToOne(type => Coder, coder => coder.projects) 
   @JoinColumn({name:'coder_id'})
   coder: Coder; 
}