import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Note } from "./note.entity";

@Entity()
export class Author {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  name: string;

  @OneToMany(() => Note, (note) => note.id)
  notes: Note[];
}
