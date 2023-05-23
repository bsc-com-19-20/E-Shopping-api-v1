import { Injectable } from '@nestjs/common';
import { Payments } from './payments.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentsDto } from './dtos/create-payments.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payments)
    private paymentsRepository: Repository<Payments>,
  ) {}

  async createPayments(payments: CreatePaymentsDto) {
    const newPayments = await this.paymentsRepository.create({ ...payments });
    this.paymentsRepository.save(newPayments);
    return 'Product paid Successfully';
  }

  showPayments() {
    return this.paymentsRepository.find();
  }

  showSinglePayment(id: any) {
    return this.paymentsRepository.findOneBy({ id });
  }

  updatePayment(id: number, updatePayments: CreatePaymentsDto) {
    this.paymentsRepository.update({ id }, { ...updatePayments });
    return 'Payment updated Successfully';
  }
}
