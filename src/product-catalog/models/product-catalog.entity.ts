import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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
}