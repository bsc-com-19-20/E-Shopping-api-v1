import { Injectable } from '@nestjs/common';
import { EditProductDto } from './dtos';

@Injectable()
export class ProductService {
    createProduct(product: any) {
        throw new Error('Method not implemented.');
    }
    fetchProduct() {
        throw new Error('Method not implemented.');
    }
    deleteProduct(id: number) {
        throw new Error('Method not implemented.');
    }
    updateProduct(id: number, updateProductDto: EditProductDto) {
        throw new Error('Method not implemented.');
    }
}
