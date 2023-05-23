import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePaymentsDto } from './dtos/create-payments.dto';
import { PaymentsService } from './payments.service';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}
  @Post('/pay')
  pay(@Body() payments: CreatePaymentsDto) {
    return this.paymentsService.createPayments(payments);
  }

  @Get('/listPayments')
  listPayments() {
    return this.paymentsService.showPayments();
  }

  @Get('/findOnePayment/:id')
  findOnePayment(@Param('id') params: any) {
    return this.paymentsService.showSinglePayment(params.id);
  }

  @Patch('/updatePayment/:id')
  update(@Param('id') id: number, @Body() updatePayments: CreatePaymentsDto) {
    return this.paymentsService.updatePayment(id, updatePayments);
  }
}
