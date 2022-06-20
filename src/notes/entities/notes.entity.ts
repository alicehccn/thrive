import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notes {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  date: string;

  @Column()
  title?: string;

  @Column()
  subtitles?: string;

  @Column()
  body: string;
}
