import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './orders.entity';
import { CreateOrdersDto } from './dto/create-orders.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
  ) {}

  async createOrders(createOrdersDto: CreateOrdersDto): Promise<Orders> {
    const newOrders = this.ordersRepository.create(createOrdersDto);
    return this.ordersRepository.save(newOrders);
  }

  async findAllOrders(): Promise<Orders[]> {
    return this.ordersRepository.find();
  }
}
