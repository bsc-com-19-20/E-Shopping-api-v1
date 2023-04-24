import { Module } from '@nestjs/common';
import { ProductCatalogController } from './product-catalog.controller';
import { ProductCatalogService } from './product-catalog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCatalog } from './models/Product-catalog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCatalog])],
  controllers: [ProductCatalogController],
  providers: [ProductCatalogService]
})
export class ProductCatalogModule {}
