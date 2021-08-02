import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, OneToMany, ManyToOne} from "typeorm";
import Professor from "./professors";
import Semester from "./semesters";
import Test from "./tests";

@Entity('subject')
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
  
  @ManyToMany(()=> Professor, professor => professor.subject)
  @JoinTable({name:'subject_professor'})
  professor:Professor[];

  @OneToMany(() => Test, test => test.subjectId)
  test:Test[];

  // @ManyToOne(() => Semester, semester => semester.name)
  // semesters: Semester;
}