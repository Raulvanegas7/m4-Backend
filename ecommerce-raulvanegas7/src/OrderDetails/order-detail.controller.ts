import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OrderDitailService as OrderDetailService } from "./order-detail.service";
import { CreateOrderDetailDto } from "./dto/create-orderD.dto";


@Controller("orderDetails")
export class OrderDetailController {
    constructor(
        private readonly orderDitailService: OrderDetailService
    ){}

    @Get()
    async getOrderDetails(){
        return await this.orderDitailService.getOrderDetail()
    }

    @Post()
    async createODs(@Body() createODetailDto: CreateOrderDetailDto){
        return await this.orderDitailService.createODetail(createODetailDto)
    }

    @Get(":id")
    async getOrderDById(@Param("id") id: string){
        return await this.orderDitailService.findOneByOrderId(id)
    }
}