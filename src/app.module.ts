import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { Orders } from './orders/orders.entity';
import { Users } from './users/users.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/product.entity';
import { PaymentsModule } from './payments/payments.module';
import { Payments } from './payments/payments.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql9.freemysqlhosting.net',
      port: 3306,
      username: 'sql9626142',
      password: 'g743VKBkI7',
      database: 'sql9626142',
      entities: [Orders, Users, Product, Payments],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    OrdersModule,
    ProductModule,
    PaymentsModule,
  ],
})
export class AppModule {}
