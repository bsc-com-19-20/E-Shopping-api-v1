import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Users } from 'src/users/users.entity';
import { Product } from 'src/product/product.entity';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  totalPrice: number;

  @Column()
  status: string;

  @Column({ type: 'date' })
  createdAt: Date;

  @Column({ type: 'date' })
  updatedAt: Date;

  @ManyToOne(() => Users, (users) => users.orders)
  users: Users;

  @OneToOne(() => Product)
  @JoinColumn()
  product: Product;
}
