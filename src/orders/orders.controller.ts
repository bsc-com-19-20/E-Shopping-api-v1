import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Patch,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrdersDto } from './dtos/create-orders.dto';
import { EditOrdersDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getOrders() {
    return this.ordersService.findAllOrders();
  }

  @Post(':id')
  addOrdersItem(@Param('id') id: number) {
    return this.ordersService.createOrders(id);
  }

  @Get('/findOneOrder/:id')
  findOneOrder(@Param('id') id: number) {
    return this.ordersService.showSingleOrder(id);
  }

  @Delete('/delete/:id')
  deleteOrder(@Param('id') id: number) {
    return this.ordersService.deleteSingleOrder(id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: number, @Body() updateOrder: CreateOrdersDto) {
    return this.ordersService.updateOrder(id, updateOrder);
  }
}
