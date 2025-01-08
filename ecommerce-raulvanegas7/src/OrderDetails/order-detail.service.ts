import { Injectable } from "@nestjs/common";
import { OrderDetail } from "./order-detail.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrderDetailDto } from "./dto/create-orderD.dto";


@Injectable()
export class OrderDitailService{
    constructor(
        @InjectRepository(OrderDetail)
        private readonly orderDetailRepository: Repository<OrderDetail>
    ){}

    async createODetail(createODetailDto: CreateOrderDetailDto){
        return await this.orderDetailRepository.save(createODetailDto)
    }

    getOrderDetail(){
        return this.orderDetailRepository.find()
    }

    findOne(id: number){
        return "Esta accion retorna un id"
    }

    update(id: number, updateODdto){
        return "Esta accion actualiza un detalle de orden"
    }

    remove(id: number){
        return "Esta accion elimina un detalle de orden"
    }

    async findOneByOrderId(
        orderId: string,
        relations: string[] = [],
    ): Promise<OrderDetail[]>{
        return await this.orderDetailRepository.find({
            where: {order_id: {id: orderId}},
            relations: relations,
        })
    }
}