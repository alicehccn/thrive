import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Note } from "./note.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Note, (note) => note.user)
  notes: Note[];
}
