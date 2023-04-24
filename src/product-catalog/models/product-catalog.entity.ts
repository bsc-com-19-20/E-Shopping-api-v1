import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductCatalog {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  @Column()
  ProductName: string;

  @Column()
  PriceName: number;

  @Column()
  isAvailable: boolean;
}