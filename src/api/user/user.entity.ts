import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
@PrimaryGeneratedColumn("uuid")
id: string

@Column()
username: string

@Column()
firstname: string

@Column()
lastname: string

@Column()
email: string

@Column()
password: string

@Column({type:"timestamp"})
created_at: Date

@Column({type:"timestamp"})
updated_at: Date
}