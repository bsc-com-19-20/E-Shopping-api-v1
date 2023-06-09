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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation({
    summary: 'getting a list of orders',
    description:
      'This displays a list of all the orders added in the database. You can only get these orders if you have already added them in the products database otherwise this router will give you nothing.',
    operationId: '',
  })
  @Get()
  getOrders() {
    return this.ordersService.findAllOrders();
  }

  @ApiOperation({
    summary: 'adding an order',
    description:
      'This router will add a new product in your orders database. This will be done using the product id of the product that you wish to add.For example "{"id": 1,"quantity": 1,"totalPrice": 500,"status": "brandnew",}"',
    operationId: '',
  })
  @Post(':id')
  addOrdersItem(@Param('id') id: number) {
    return this.ordersService.createOrders(id);
  }

  @ApiOperation({
    summary: 'getting a single order',
    description:
      'This router will return a single order from the database. You will only be able to get a single order by specifying the order id.',
    operationId: '',
  })
  @Get('/findOneOrder/:id')
  findOneOrder(@Param('id') id: number) {
    return this.ordersService.showSingleOrder(id);
  }

  @ApiOperation({
    summary: 'deleting a order',
    description:
      'This router will delete a single order from your database.You can only delete the single order at a time by specifying the id of the order you wish to delete.',
    operationId: '',
  })
  @Delete('/delete/:id')
  deleteOrder(@Param('id') id: number) {
    return this.ordersService.deleteSingleOrder(id);
  }

  @ApiOperation({
    summary: 'updating an order',
    description:
      'This will update an order in your database when ever you wish to make changes to the already exist order details. This will also need you to specify the order id.',
    operationId: '',
  })
  @Patch('/update/:id')
  update(@Param('id') id: number, @Body() updateOrder: CreateOrdersDto) {
    return this.ordersService.updateOrder(id, updateOrder);
  }
}
