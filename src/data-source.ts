import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Session } from "./entity/Session"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "raja.db.elephantsql.com",
    port: 5432,
    username: "qkzpbeml",
    password: "Dl5UV1ERsw73KRf_pRwsLgbHCmKcuQEo",
    database: "qkzpbeml",
    synchronize: true,
    logging: true,
    entities: [User, Session],
    migrations: [],
    subscribers: [],
})
