import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Orders } from 'src/orders/orders.entity';

@Entity()
export class ProductCatalog {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  @Column()
  ProductName: string;

  @Column()
  Price: number;

  @Column()
  description: string;

  @ManyToOne(() => Orders, orders => orders.productCatalog)
  orders: Orders[];
}