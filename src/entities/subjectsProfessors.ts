import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Subject from "./subjects";

@Entity('subjects_professors')
export default class subjectsProfessors {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  subjectId: number;

  @Column()
  professorId: number;

  //@ManyToOne(() => Subject, subjects => subjects.id) subjects : Subject;
}