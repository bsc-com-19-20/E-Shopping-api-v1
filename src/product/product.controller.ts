import {
    Controller,
    Get,
    Post,
    Body,
    Delete,
    Param,
    ParseIntPipe,
    Patch, } from '@nestjs/common';
import { ProductService } from './product.service';
import { EditProductDto } from './dtos';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}
    @Get()
    getProduct(){
        return this.productService.fetchProduct()
    }

    @Post()
    addProductItem(@Body() product){
        return this.productService.createProduct(product)
    }

    @Delete(':id')
  async deleteProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() product_name: String,
  ) {
    return await this.productService.deleteProduct(id);
  }
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: EditProductDto,
  ) {
    return await this.productService.updateProduct(id, updateProductDto);
  }
}