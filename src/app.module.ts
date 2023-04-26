import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ProductCatalogController } from './product-catalog/product-catalog.controller';
import { ProductCatalogModule } from './product-catalog/product-catalog.module';
import { ProductCatalog } from './product-catalog/models/Product-catalog.entity';
import { OrdersService } from './orders/orders.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { Orders } from './orders/orders.entity';
@Module({
  imports: [ProductCatalogModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'eshopping_v1',
      entities: [ProductCatalog],
      synchronize: true,
    }),

    OrdersModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class AppModule {}