import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
