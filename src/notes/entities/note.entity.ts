import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Author } from "./author.entity";

@Entity()
export class Note {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text", { nullable: true })
  title: string;

  @Column("text", { nullable: true })
  subtitles: string;

  @Column("text")
  body: string;

  @Column("text", { nullable: true })
  image: string;

  @Column({ default: 0 })
  recommendations: number;

  @ManyToOne(() => Author, (author) => author.id)
  @JoinColumn({ name: "author" })
  author: Author;

  @CreateDateColumn({ name: "createdat" }) "createdAt": Date;
  @UpdateDateColumn({ name: "updatedat" }) "updatedAt": Date;
}
