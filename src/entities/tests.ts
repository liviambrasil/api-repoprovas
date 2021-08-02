import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Category from "./categories";
import Professor from "./professors";
import Subject from "./subjects";

@Entity('test')
export default class Test {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  link: string;

  @Column()
  categoryId: number;

  @Column()
  subjectId: number;

  @Column()
  professorId: number;

  @ManyToOne(() => Professor, professor => professor.id)
  professor: Professor;

  @ManyToOne(() => Subject, subject => subject.id)
  subject: Subject;

  @ManyToOne(() => Category, category => category.id)
  category: Category;
}