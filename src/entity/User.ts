import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Session } from "./Session"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToMany(() => Session, (session) => session.user )
    sessions: Session[]
}
