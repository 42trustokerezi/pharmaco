import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { ProductCat } from '../product-cat/product-cat.entity';
import { Pharmacy } from '../pharmacy/pharmacy.entity';

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

@OneToOne(()=> ProductCat)
@JoinColumn()
category: ProductCat

@ManyToOne(()=> Pharmacy, (pharmacy)=> pharmacy.products)
pharmacy: Pharmacy
}