import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { CreateOrderDto } from "./dto/create.orderDto";

@Controller("orders")
export class OrderController{
    constructor(
        private readonly orderService: OrderService
    ){}

    @Post()
    async createOrders(@Body() createOrderDto: CreateOrderDto){        
    const orderDetail = await this.orderService.createOrder(createOrderDto);
    
    return {
        ...orderDetail,
        order: {
            id: orderDetail.order.id,
            date: orderDetail.order.date,
            userId: orderDetail.order.user.id, 
         },
        };
    }

    @Get()
    async getOrders(){
        return await this.orderService.getOrder()
    }

    @Get(":id")
    async findOne(@Param("id") id: string ){
        return await this.orderService.findOneOrder(id)
    }

    @Get(":id")
    async findByUser(@Param("id") id: string){
        return await this.orderService.findByUser(id)
    }

    @Put(":id")
    async updateOrder(@Param("id") id: any, @Body() updateOrderDto: any){
        return await this.orderService.update(id, updateOrderDto)
    }

}