export class CreateProductDto {
  productName: string;
  productPrice: number;
  quantity: number;
  description: string;
  categories: string;
  productAvailable: boolean;
}
