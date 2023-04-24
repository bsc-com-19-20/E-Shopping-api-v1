import {
    Controller,
    Get,
    Post,
    Body,
    Delete,
    Param,
    ParseIntPipe,
    Patch, } from '@nestjs/common';
import { ProductCatalogService } from './product-catalog.service';
import { EditProductCatalogDto } from './dtos';

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
    addProductCatalogItem(@Body() productCatalog){
        return this.productCatalogService.createProductCatalog(productCatalog)
    }

    @Delete(':id')
  // localhost:3000/product-catalog
  async deleteProductCatalog(
    @Param('id', ParseIntPipe) id: number,
    @Body() product_name: String,
  ) {
    return await this.productCatalogService.deleteProductCatalog(id);
  }
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductCatalogDto: EditProductCatalogDto,
  ) {
    return await this.productCatalogService.updateProductCatalog(id, updateProductCatalogDto);
  }
}