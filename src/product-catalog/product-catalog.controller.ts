import { Controller, Get, Post } from '@nestjs/common';
import { ProductCatalogService } from './product-catalog.service';

@Controller('product-catalog')
export class ProductCatalogController {
    constructor(private productCatalogService: ProductCatalogService) {}
    @Get()
    // localhost:3000/product-catalog
    getProductCatalog(){
        return this.productCatalogService.fetchProductCatalog()
    }

    @Post()
    // localhost:3000/product-catalog
    addProductCatalogItem(){
        return this.productCatalogService.createProductCatalog()
    }
}
