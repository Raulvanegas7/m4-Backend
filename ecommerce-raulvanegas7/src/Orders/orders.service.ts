import { Injectable } from "@nestjs/common";
import { Order } from "./order.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserService } from "src/Users/users.service";
import { ProductsService } from "src/Products/products.service";
import { OrderDitailService } from "src/OrderDetails/order-detail.service";
import { CreateOrderDto, ProductId } from "./dto/create.orderDto";
import { OrderResponseDto } from "./dto/order-responseDto";
import { CreateOrderDetailDto } from "src/OrderDetails/dto/create-orderD.dto";

@Injectable()
export class OrderService{
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        private readonly userService: UserService,
        private readonly productService: ProductsService,
        private readonly orderDitailService: OrderDitailService,

    ){}

    async createOrder(createOrder: CreateOrderDto){
        const {userId, products} = createOrder
        const findUser = await this.userService.getUserById(userId)

        const order = {
            user: findUser,
            date: new Date()
        }

        const orderEntity = await this.orderRepository.save(
            this.orderRepository.create(order)
        )

        const total = await this.calculateTotal(products)

        const orderDetail = new CreateOrderDetailDto()
        orderDetail.price = total,
        orderDetail.products = products,
        orderDetail.order = orderEntity

        const orderDitailEntity = await this.orderDitailService.createODetail(orderDetail)
        return new OrderResponseDto(orderDitailEntity)
    }

        private async calculateTotal(products: Array<ProductId>){
            let total = 0;
            for(const product of products){
                total += await this.productService.buyProduct(product.id)
            }
            return total
        }

    async getOrder(){
        return await this.orderRepository.find()
    }

    async findOneOrder(id: string){
        const order = await this.orderRepository.findOneBy({id})
        const orderDitail = await this.orderDitailService.findOneByOrderId(
            order.id,
            ["products", "order"]
        )
        return orderDitail;
    }

    async findByUser(id: string){
        const user = await this.userService.getUserById(id)
        const orders = await this.orderRepository.find({
        where: {user_id: {id: user.id}}
    })
        return {orders, user}
    }

    async update(id: any, updateOrderDto: any){
        return await this.orderRepository.update(id, updateOrderDto)
    }
    
    remove(id: number){
        return "Esta accion elimina una orden"
    }
}