import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm"; 
import {Project} from "./Project"; 

@Entity() 
export class Coder {  
   
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   name: string; 
   
   @OneToMany(type => Project, project => project.coder) 
   projects: Project[];  
}