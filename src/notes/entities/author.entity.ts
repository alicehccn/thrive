import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique,
} from "typeorm";
import { Note } from "./note.entity";

@Unique(["username"])
@Entity()
export class Author {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  username: string;
}
