export class EditOrdersDto {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  }