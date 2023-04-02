import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Pharmacy {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  Address: string;
  @Column()
  city: string;
  @Column()
  postal_code: number;
  @Column()
  telephone: number;
  @Column()
  email: string;

  @OneToMany(()=> Product, (product)=> product.pharmacy)
  products: Product[];

  @Column()
  created_at: Date;
}
