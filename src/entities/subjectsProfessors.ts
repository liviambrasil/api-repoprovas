import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity('subject_professor')
export default class subjectProfessor {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  subjectId: number;

  @Column()
  professorId: number;

  @Column()
  courseId: number;
}