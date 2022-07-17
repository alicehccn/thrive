import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Unique(["username"])
@Entity()
export class Author {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text", { unique: true })
  username: string;

  @CreateDateColumn({ name: "createdat" }) "createdAt": Date;
  @UpdateDateColumn({ name: "updatedat" }) "updatedAt": Date;
}
