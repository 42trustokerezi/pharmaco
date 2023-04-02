import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class ProductCat {
@PrimaryGeneratedColumn()
id: number

@Column()
category_name: string
}