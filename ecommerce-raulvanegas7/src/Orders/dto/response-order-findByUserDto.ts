import { OrderDetail } from "src/OrderDetails/order-detail.entity"
import { User } from "src/Users/user.entity"
import { Order } from "../order.entity"


interface Data{
    user: User,
    orders: Array<Order>
}

export class ResponseFindByUserDto{
    data: Data
    
    constructor(orders: Array<Order>, user: User){
        this.data.user = user,
        this.data.orders = orders
    }
}
