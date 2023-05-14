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
//import { AuthGuard } from '@nestjs/passport';

@Controller('orders')
//@UseGuards(AuthGuard('jwt'))
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

  //   @Delete(':id')

  // async deleteOrders(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() product_name: String,
  // ) {
  //   return await this.ordersService.deleteOrders(id);
  // }
  // @Patch(':id')
  // async update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateOrdersDto: EditOrdersDto,
  // ) {
  //   return await this.ordersService.updateOrders(id, updateOrdersDto);
  // }
}
