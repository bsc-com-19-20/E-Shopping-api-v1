import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePaymentsDto } from './dtos/create-payments.dto';
import { PaymentsService } from './payments.service';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @ApiOperation({
    summary: 'making a payment',
    description:
      'This router will provide payment details to the database that will show the confirmation of the payment, The user will use the account number on the product details to pay for the products. Then the reference number will be added here.For example:"{id: "1",productName: "Dell Latitude E7250",paymentRefNo: "QX5H36YW9P",shippingAddress: "Malawi,Zombaa,P.O.Box 104",}',
    operationId: '',
  })
  @Post('/pay')
  pay(@Body() payments: CreatePaymentsDto) {
    return this.paymentsService.createPayments(payments);
  }

  @ApiOperation({
    summary: 'listing payments',
    description:
      'This displays a list of all the payments that are added in the payment database. You can only get these payments if you have already added them in the database otherwise this router will give you nothing.',
    operationId: '',
  })
  @Get('/listPayments')
  listPayments() {
    return this.paymentsService.showPayments();
  }

  @ApiOperation({
    summary: 'getting a single payment',
    description:
      'This router will get a single payment for a product you wish to see if it has been successfully paid. You can get this using the payment id.',
    operationId: '',
  })
  @Get('/findOnePayment/:id')
  findOnePayment(@Param('id') id: number) {
    return this.paymentsService.showSinglePayment(id);
  }

  @ApiOperation({
    summary: 'updating payment details',
    description:
      'This will update a payment in your database when ever you wish to make changes to the already exist payment details. This will also need you to specify the payment id.',
    operationId: '',
  })
  @Patch('/updatePayment/:id')
  update(@Param('id') id: number, @Body() updatePayments: CreatePaymentsDto) {
    return this.paymentsService.updatePayment(id, updatePayments);
  }
}
