import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { ProductCatalog } from 'src/product-catalog/models/Product-catalog.entity';
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

  @OneToMany(() => ProductCatalog, productCatalog => productCatalog.orders)
  productaCatalog: ProductCatalog;
  productCatalog: any;
}
