import { IsNotEmpty, IsArray, IsNumber, IsObject, IsString } from 'class-validator';
import { CreateOrderDto, ProductId } from 'src/Orders/dto/create.orderDto';
import { Order } from 'src/Orders/order.entity';

export class CreateOrderDetailDto {

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsArray()
  @IsNotEmpty()
  products: ProductId[];

  @IsObject()
  @IsNotEmpty()
  order: Order;
  
}
