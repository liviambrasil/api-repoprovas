import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('tests')
export default class Test {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  categoryId: number;

  @Column()
  subjectId: number;

  @Column()
  professorId: number;
}