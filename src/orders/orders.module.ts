import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './orders.entity';
import { ProductCatalog } from 'src/product-catalog/models/product-catalog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orders, ProductCatalog])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
