export class CreateProductDto {
  id: number;
  productName: string;
  productPrice: number;
  quantity: number;
  description: string;
  categories: string;
  productAvailable: boolean;
  paymentDetails: string;
}
