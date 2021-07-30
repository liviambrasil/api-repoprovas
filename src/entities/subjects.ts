import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import subjectsProfessors from "./subjectsProfessors";

@Entity('subjects')
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  //@OneToMany(() => subjectsProfessors, subjectsProfessors => subjectsProfessors.subjectId) subjectsProfessors : subjectsProfessors;
}