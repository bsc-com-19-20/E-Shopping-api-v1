import { ProductCatalog } from 'src/product-catalog/models/product-catalog.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  product_id: number;

  @Column()
  quantity: number;

  @Column()
  date: Date;

  @ManyToOne(() => ProductCatalog, (productCatalog) => productCatalog.orders, { nullable: false })
  productCatalog: ProductCatalog;
}
