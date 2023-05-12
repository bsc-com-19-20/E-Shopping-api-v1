import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ProductCatalog {
  cartItems: any;
  static findOne(productId: number) {
      throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  @Column()
  ProductName: string;

  @Column()
  quantity: number;

  @Column()
  description: string;

}