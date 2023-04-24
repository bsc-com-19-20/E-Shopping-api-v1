import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCatalogController } from './product-catalog/product-catalog.controller';
import { ProductCatalogModule } from './product-catalog/product-catalog.module';
import { ProductCatalog } from './product-catalog/models/Product-catalog.entity';

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
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}