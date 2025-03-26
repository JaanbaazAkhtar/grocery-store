import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { GroceryService } from './grocery.service';
import { Grocery } from './entities/grocery.entity';
import { Roles } from '../decorators/roles.decorators';
import { RoleGuard } from '../auth/role.guard';

@Controller('grocery')
export class GroceryController {
  constructor(private readonly groceryService: GroceryService) {}

  @Get()
  findAll() {
    return this.groceryService.findAll();
  }

  @Post()
  @Roles('ADMIN')
  @UseGuards(RoleGuard)
  create(@Body() data: Partial<Grocery>) {
    return this.groceryService.create(data);
  }

  @Patch(':id')
  @Roles('ADMIN')
  @UseGuards(RoleGuard)
  update(@Param('id') id: number, @Body() data: Partial<Grocery>) {
    return this.groceryService.update(id, data);
  }

  @Delete(':id')
  @Roles('ADMIN')
  @UseGuards(RoleGuard)
  delete(@Param('id') id: number) {
    return this.groceryService.delete(id);
  }
}
