import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./product.interface";


@Controller("products")
export class ProductController{
    constructor(private readonly ProductsService: ProductsService) {}
    @Get()
    getProducts(
        @Query("page") page: number = 1,
        @Query("limit") limit: number = 5 
    ){
        return this.ProductsService.getProducts(page, limit)
    }
    
    @Post()
    createProduct(@Body() product: Product){
        return this.ProductsService.createProduct(product)
    }

    @Put(":id")
    updateProduc(@Param("id") id: string){
        return this.ProductsService.upDateProduct(Number(id))
    }

    @Delete(":id")
    deleteProduct(@Param("id") id: string){
        return this.ProductsService.deleteProduct(Number(id))
    }

    @Get(":id")
    getProductById(@Param("id") id: string){
        return this.ProductsService.getProductById(Number(id))
    }
}