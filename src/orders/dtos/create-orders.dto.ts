export class CreateOrdersDto {
  id: number;
  quantity: number;
  totalPrice: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
