import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Orders } from 'src/orders/orders.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Orders, orders => orders.users)
  orders: Orders[];
    cartItems: any;
}
