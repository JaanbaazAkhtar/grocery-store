import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grocery } from './grocery.entity';

@Injectable()
export class GroceryService {
  constructor(
    @InjectRepository(Grocery)
    private readonly groceryRepository: Repository<Grocery>,
  ) {}

  findAll() {
    return this.groceryRepository.find();
  }

  async create(data: Partial<Grocery>) {
    const grocery = this.groceryRepository.create(data);
    return this.groceryRepository.save(grocery);
  }

  async update(id: number, data: Partial<Grocery>) {
    const grocery = await this.groceryRepository.findOne({ where: { id } });
    if (!grocery) throw new NotFoundException('Grocery item not found');
    Object.assign(grocery, data);
    return this.groceryRepository.save(grocery);
  }

  async delete(id: number) {
    const grocery = await this.groceryRepository.findOne({ where: { id } });
    if (!grocery) throw new NotFoundException('Grocery item not found');
    return this.groceryRepository.remove(grocery);
  }
}
