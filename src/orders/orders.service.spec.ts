import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './orders.entity';
import { CreateOrdersDto } from './dto/create-orders.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private readonly orderRepository: Repository<Orders>,
  ) {}

  async createOrder(createOrdersDto: CreateOrdersDto): Promise<Orders> {
    const newOrder = this.orderRepository.create(createOrdersDto);
    return this.orderRepository.save(newOrder);
  }

  async findAllOrders(): Promise<Orders[]> {
    return this.orderRepository.find();
  }
}
