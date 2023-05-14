import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './orders.entity';
import { CreateOrdersDto } from './dtos/create-orders.dto';
import { EditOrdersDto } from './dtos';
import { Product } from 'src/product/product.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
  ) {}

  async createOrders(id: number): Promise<Orders> {
    const newProduct = await this.productRepository.findOneBy({ id });
    const newOrders = await this.ordersRepository.create({
      product: { ...newProduct },
    });
    return this.ordersRepository.save(newOrders);
  }

  async markOrdersAsPaid(id: number): Promise<Orders> {
    const orders = await this.ordersRepository.findOneBy({ id });
    orders.paid = true;
    return await this.ordersRepository.save(orders);
  }

  async findAllOrders(): Promise<Orders[]> {
    return this.ordersRepository.find();
  }
}
