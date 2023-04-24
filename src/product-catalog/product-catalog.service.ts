import { Injectable } from '@nestjs/common';
import { ProductCatalog } from './models/Product-catalog.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductCatalogService {
    constructor(
        @InjectRepository(ProductCatalog)
        private productCatalogRepository: Repository<ProductCatalog>){}
    fetchProductCatalog() {
        return this.productCatalogRepository.find();
    }
    createProductCatalog(){
        return 'Product'
    }
} 