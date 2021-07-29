import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('users')
export default class Test {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  info: string;
}