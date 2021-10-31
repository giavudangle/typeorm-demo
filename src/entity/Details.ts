import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export abstract class Details {

    @PrimaryGeneratedColumn() 
    id: number; 
    
    @Column() 
    title: string; 
    
    @Column() 
    description: string; 
 } 
 @Entity() 
 export class Result extends Details{  
 
    @Column() 
    eligible: string 
 } 
 @Entity() 
 export class Grade extends Details{   
 
    @Column() 
    name : string; 
    
    @Column() 
    grading : string; 
 }