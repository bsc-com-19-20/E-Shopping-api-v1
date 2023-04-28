import { Controller, Get, Post, Body, UseGuards, Patch, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrdersDto } from './dto/create-orders.dto';
import { EditOrdersDto } from './dto';
//import { AuthGuard } from '@nestjs/passport';

@Controller('orders')
//@UseGuards(AuthGuard('jwt'))
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  
  getOrders(){
      return this.ordersService.fetchOrders()
  }

  @Post(':id/pay')
  async markOrdersAsPaid(@Param('id') id: number) {
    return await this.ordersService.markOrdersAsPaid(id);
  }

  @Post()
 
  addOrdersItem(@Body() orders){
      return this.ordersService.createOrders(orders)
  }

  @Delete(':id')

async deleteOrders(
  @Param('id', ParseIntPipe) id: number,
  @Body() product_name: String,
) {
  return await this.ordersService.deleteOrders(id);
}
@Patch(':id')
async update(
  @Param('id', ParseIntPipe) id: number,
  @Body() updateOrdersDto: EditOrdersDto,
) {
  return await this.ordersService.updateOrders(id, updateOrdersDto);
}
}
