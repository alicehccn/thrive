import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;
}
