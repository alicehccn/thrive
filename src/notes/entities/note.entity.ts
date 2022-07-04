import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Author } from "./author.entity";

@Entity()
export class Note {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("date")
  date: string;

  @Column("text", { nullable: true })
  title: string;

  @Column("text", { nullable: true })
  subtitles: string;

  @Column("text")
  body: string;

  @Column({ default: 0 })
  recommendations: number;

  @ManyToOne(() => Author, (author) => author.notes)
  @JoinColumn({ name: "author" })
  author: Author;
}
