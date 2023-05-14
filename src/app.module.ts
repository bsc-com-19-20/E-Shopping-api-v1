import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
      entities: [Orders, Users, Product],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    OrdersModule,
    ProductModule],
})
export class AppModule {}