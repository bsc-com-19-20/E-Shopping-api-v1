import { Orders } from 'src/orders/orders.entity';
import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductCatalog {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  @Column()
  ProductName: string;

  @Column()
  Price: number;

  @Column()
  isAvailable: boolean;

  @OneToMany(() => Orders, (orders) => orders.productCatalog)
  orders: Orders[];
}