import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Unique(["username"])
@Entity()
export class Author {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text", { nullable: true })
  username: string;
}
