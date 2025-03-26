import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Grocery } from '../grocery/grocery.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Grocery)
  @JoinTable()
  items: Grocery[];

  @Column({ default: 'PENDING' })
  status: string;
}
