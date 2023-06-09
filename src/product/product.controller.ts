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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @ApiOperation({
    summary: 'adding a product',
    description:
      'This router will add a new product to the list of products in the database. for example: "{"id": 1,"productName": "Dell Latitude E7250","productPrice": 250,"quantity": 1,"description": "5th Gen. ,CPU 2.3GHz, Ram 8GB..","categories": "Electronics","productAvailable": true,"PaymentDetails": "1006883571",},"',
    operationId: '',
  })
  @Post('/add')
  addProductItem(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

  @ApiOperation({
    summary: 'getting a list of products',
    description:
      'This displays a list of all the products added in the database. You can only get these products if you have already added them in the database otherwise this router will give you nothing.',
    operationId: '',
  })
  @Get('/list')
  listProduct() {
    return this.productService.showProducts();
  }

  @ApiOperation({
    summary: 'getting a single product',
    description:
      'This router will return a single product from the database. You will only be able to get a single product by specifying the product id.',
    operationId: '',
  })
  @Get('/findOneProduct/:id')
  findOneProduct(@Param('id') params: any) {
    return this.productService.showSingleProduct(params.id);
  }

  @ApiOperation({
    summary: 'deleting a product',
    description:
      'This router will delete a single product from your database.You can only delete the single product at a time by specifying the id of the product you wish to delete.',
    operationId: '',
  })
  @Delete('/delete/:id')
  deleteProduct(@Param('id') id: number) {
    return this.productService.deleteSingleProduct(id);
  }

  @ApiOperation({
    summary: 'updating a product',
    description:
      'This will update a product in your database when ever you wish to make changes to the already exist product details. This will also need you to specify the product id.',
    operationId: '',
  })
  @Patch('/update/:id')
  update(@Param('id') id: number, @Body() updateProduct: CreateProductDto) {
    return this.productService.updateProduct(id, updateProduct);
  }
}
