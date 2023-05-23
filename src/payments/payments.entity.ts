import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  paymentRefNo: string;

  @Column()
  shippingAddress: string;
}
