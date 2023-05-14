import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, EditProductDto } from './dtos';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post('/add')
  addProductItem(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

  @Get('/list')
  listProduct() {
    return this.productService.showProducts();
  }

  @Get('/findOneProduct/:id')
  findOneProduct(@Param('id') params: any) {
    return this.productService.showSingleProduct(params.id);
  }

  @Delete('/delete/:id')
  deleteProduct(@Param('id') id: number) {
    return this.productService.deleteSingleProduct(id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: number, @Body() updateProduct: CreateProductDto) {
    return this.productService.updateProduct(id, updateProduct);
  }
}
