import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Test from "./tests";

@Entity('category')
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @OneToMany(() => Test, test => test.categoryId)
  test:Test[];
}