import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToOne,
} from "typeorm";
import { Author } from "./author.entity";

@Entity()
export class Note {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  date: string;

  @Column()
  title?: string;

  @Column()
  subtitles?: string;

  @Column()
  body: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable()
  @ManyToOne(() => Author)
  author: string;
}
