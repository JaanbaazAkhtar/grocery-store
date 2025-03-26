import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { GroceryService } from './grocery.service';
import { Grocery } from './grocery.entity';

@Controller('grocery')
export class GroceryController {
  constructor(private readonly groceryService: GroceryService) {}

  @Get()
  findAll() {
    return this.groceryService.findAll();
  }

  @Post()
  create(@Body() data: Partial<Grocery>) {
    return this.groceryService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: Partial<Grocery>) {
    return this.groceryService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.groceryService.delete(id);
  }
}
