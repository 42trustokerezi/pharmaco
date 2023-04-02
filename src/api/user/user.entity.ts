import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
@PrimaryGeneratedColumn("uuid")
id: string

@Column()
usernames: string

@Column()
firstname: string

@Column()
lastname: string

@Column()
email: string

@Column({type:"timestamp"})
created_at: Date

@Column({type:"timestamp"})
updated_at: Date
}