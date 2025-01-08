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

    constructor(orderDitail: OrderDetail){
        this.id = orderDitail.id
        this.price = orderDitail.price
        this.product = orderDitail.product_id
        this.order = {
            id: orderDitail.order_id.id,
            date: orderDitail.order_id.date,
            user: {
                id: orderDitail.order_id.user_id.id
            }
        }
    }
}
