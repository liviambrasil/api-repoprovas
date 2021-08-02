import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Subject from "./subjects";

@Entity('semester')
export default class Semester {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  // @OneToMany(() => Subject, subject => subject.semester)
  // subject: Subject[];
}