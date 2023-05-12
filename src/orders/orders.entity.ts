import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Users } from 'src/users/users.entity';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  productId: number;

  @Column()
  quantity: number;

  @Column()
  totalPrice: number;

  @Column()
  status: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ type: 'boolean', default: false })
  paid: boolean;

  @ManyToOne(() =>  Users, users => users.orders)
  users: Users;

}
