import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './orders.entity';
import { CreateOrdersDto } from './dto/create-orders.dto';
import { EditOrdersDto } from './dto';

@Injectable()
export class OrdersService {
  fetchOrders() {
    throw new Error('Method not implemented.');
  }
  deleteOrders(id: number) {
    throw new Error('Method not implemented.');
  }
  updateOrders(id: number, updateOrdersDto: EditOrdersDto) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
  ) {}

  async createOrders(createOrdersDto: CreateOrdersDto): Promise<Orders> {
    const newOrders = this.ordersRepository.create(createOrdersDto);
    return this.ordersRepository.save(newOrders);
  }

  async markOrdersAsPaid(id: number): Promise<Orders> {
    const orders = await this.ordersRepository.findOneBy({id});
    orders.paid = true;
    return await this.ordersRepository.save(orders);
  }

  async findAllOrders(): Promise<Orders[]> {
    return this.ordersRepository.find();
  }
}
