import { Injectable } from '@nestjs/common';
import { CreateProductDto, EditProductDto } from './dtos';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async createProduct(product: CreateProductDto) {
    const newProduct = await this.productRepository.create({ ...product });
    this.productRepository.save(newProduct);
    return 'Product added Successfully';
  }

  showProducts() {
    return this.productRepository.find();
  }

  showSingleProduct(id: any) {
    return this.productRepository.findOneBy({ id });
  }

  deleteSingleProduct(id: number) {
    this.productRepository.delete({ id });
    return 'Product deleted Successfully';
  }

  updateProduct(id: number, updateProduct: CreateProductDto) {
    this.productRepository.update({ id }, { ...updateProduct });
    return 'Product updated Successfully';
  }
}
