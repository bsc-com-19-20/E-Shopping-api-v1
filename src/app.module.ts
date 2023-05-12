import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCatalogController } from './product-catalog/product-catalog.controller';
import { ProductCatalogModule } from './product-catalog/product-catalog.module';
import { ProductCatalog } from './product-catalog/models/Product-catalog.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { Orders } from './orders/orders.entity';
import { Users } from './users/users.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'eshopping_v1',
      entities: [ProductCatalog, Orders, Users, Product],
      synchronize: true,
    }),
    ProductCatalogModule,
    AuthModule,
    UsersModule,
    OrdersModule,
    ProductModule],
})
export class AppModule {}