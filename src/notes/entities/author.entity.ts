import {
  Column, 
  Entity, 
  PrimaryGeneratedColumn, 
  OneToMany,
 } from "typeorm";
import { Note } from "./note.entity";


@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Note, note => note.author)
  notes: Note[];
}