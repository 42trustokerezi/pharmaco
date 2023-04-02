import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    sku: string

    @Column()
    price: number

    @Column({type: 'timestamp'})
    created_at: Date

    @Column({type: 'timestamp'})
    updated_at: Date
}