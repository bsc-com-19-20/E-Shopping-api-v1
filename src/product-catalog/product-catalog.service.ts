import { Injectable } from '@nestjs/common';
import { ProductCatalog } from './models/Product-catalog.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductCatalogDto,EditProductCatalogDto } from './dtos';

@Injectable()
export class ProductCatalogService {
    constructor(
        @InjectRepository(ProductCatalog)
        private productCatalogRepository: Repository<ProductCatalog>){}
    fetchProductCatalog() {
        return this.productCatalogRepository.find();
    }
    createProductCatalog(productCatalog: CreateProductCatalogDto){
        const newProductCatalog = this.productCatalogRepository.create({ ...productCatalog });
        return this.productCatalogRepository.save(newProductCatalog);
        return 'Product'
    }
    async deleteProductCatalog(id: number) {
        return this.productCatalogRepository.delete({ id });
      }
    
      async updateProductCatalog(id: number, productCatalogDetails: EditProductCatalogDto) {
        return this.productCatalogRepository.update({ id }, { ...productCatalogDetails });
      }
} 