import { Catch, Injectable, Logger } from '@nestjs/common';
import { Orders } from './orders.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto, EditOrderDto } from './dtos';
import { error } from 'console';
import { ProductCatalog } from 'src/product-catalog/models/product-catalog.entity';

@Injectable()
export class OrdersService {
  private logger = new Logger(OrdersService.name);
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
    @InjectRepository(ProductCatalog)
    private productCatalogRepository: Repository<ProductCatalog>,
  ) {}

  async fetchAllOrder() {
    try {
      return this.ordersRepository.find();
    } catch (error) {
      throw new Error(`Error retrieving orders: ${error.message}`);
    }
  }

  async fetchOrders(id: number): Promise<Orders[]> {
    try {
      return this.ordersRepository.find({
        where: {
            productCatalog: {
            id: id,
          },
        },
      });
    } catch (error) {
      throw new Error(
        `Error retrieving ProductCatalog with id ${id}: ${error.message}`,
      );
    }
  }

  async createOrder(id, order: CreateOrderDto) {
    this.logger.log(id);
    const productCatalog = await this.productCatalogRepository.findOne({ where: { id } });
    this.logger.log({ ...productCatalog });
    // food_id: numder, quantity: number, date: Date//
    const date = new Date();
    const newProductCatalog = this.ordersRepository.create({ ...order, productCatalog, date });
    return this.ordersRepository.save(newProductCatalog);
  }

  async deleteOrder(id: number) {
    return this.ordersRepository.delete({ id });
  }

  async updateOrder(id: number, orderDetails: EditOrderDto) {
    return this.ordersRepository.update({ id }, { ...orderDetails });
  }
}
