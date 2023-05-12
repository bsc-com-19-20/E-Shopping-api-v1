import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  productPrice: number;

  @Column()
  quantity: number;

  @Column()
  description: string;

  @Column()
  productAvailable: boolean;

}