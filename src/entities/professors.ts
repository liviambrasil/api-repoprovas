import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import Subject from "./subjects";
import Test from "./tests";

@Entity('professor')
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @ManyToMany(()=> Subject, subject => subject.professor)
  @JoinTable({name:"subject_professor"})
  subject:Subject[];

  @OneToMany(() => Test, test => test.professorId)
  test:Test;
}