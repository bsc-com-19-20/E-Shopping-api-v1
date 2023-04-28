import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrdersDto } from './dto/create-orders.dto';
//import { AuthGuard } from '@nestjs/passport';

@Controller('orders')
//@UseGuards(AuthGuard('jwt'))
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrdersDto): Promise<any> {
    return this.ordersService.createOrders(createOrderDto);
  }

  @Get()
  findAll(): Promise<any[]> {
    return this.ordersService.findAllOrders();
  }
}
