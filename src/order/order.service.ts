import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  findAll() {
    return this.orderRepository.find({ relations: ['items'] });
  }

  async create(data: Partial<Order>) {
    const order = this.orderRepository.create(data);
    return this.orderRepository.save(order);
  }
}
