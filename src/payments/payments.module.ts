import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { Payments } from './payments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Payments])],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
