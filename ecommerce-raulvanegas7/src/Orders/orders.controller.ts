import { Controller } from "@nestjs/common";
import { OrderService } from "./orders.service";

@Controller("orders")
export class OrderController{
    constructor(private readonly orderService: OrderService)
    {}
}