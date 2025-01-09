import { OrderDetail } from "src/OrderDetails/order-detail.entity"


export class OrderResponseDto{
    id: string
    price: number
    product: object[]
    order: {
        id: string
        date: Date
        user: {
            id:string
        }
    }

    constructor(orderDetail: OrderDetail){
        this.id = orderDetail.id
        this.price = orderDetail.price
        this.product = orderDetail.product
        this.order = {
            id: orderDetail.order.id,
            date: orderDetail.order.date,
            user: {
                id: orderDetail.order.user.id
            }
        }
    }
}
