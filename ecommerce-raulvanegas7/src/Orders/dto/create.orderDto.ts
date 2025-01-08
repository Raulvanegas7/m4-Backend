import { IsArray, IsString, isString } from "class-validator"


export interface ProductId {
    id: string
}

export class CreateOrderDto {
    @IsString()
    userId: string
    @IsArray()
    products: Array<ProductId>
}