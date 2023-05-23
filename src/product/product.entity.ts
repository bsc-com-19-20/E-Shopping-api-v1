import { Orders } from 'src/orders/orders.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

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
  categories: string;

  @Column()
  productAvailable: boolean;

  @Column()
  PaymentDetails: string;
}
