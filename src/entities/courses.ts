import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('course')
export default class Course {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
}