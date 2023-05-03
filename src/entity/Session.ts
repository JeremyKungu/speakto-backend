import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: "time" })
  timeOnly: string;

  @Column({ type: "date" })
  dateOnly: string;

  @Column({ name: "duration_minutes" })
  durationMinutes: number;

  @Column("decimal", { precision: 6, scale: 2 })
  price: number;

  @ManyToOne(() => User, (user) => user.sessions)
  user: User 
  
}
