import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./product.interface";
import { AuthGuard } from "src/Auth/auth.guard";
import { ProductSeeder } from "src/seeder/products/products.seed";


@Controller("products")
export class ProductController{
    constructor(
        private readonly productsService: ProductsService,
        private readonly productSeeder: ProductSeeder
    ){}

    @Post("seeder")
    seeder(){
        return this.productSeeder.createSeedProduct()
    }

    @Post()
    // @UseGuards(AuthGuard)
    createProducts(@Body() product: Product){
        return this.productsService.createProduct(product)
    }

    @Get()
    getProducts(
        @Query("page") page: number = 1,
        @Query("limit") limit: number = 5 
    ){
        return this.productsService.getProduct(page, limit)
    }
    
    @Get(":id")
    getProductsById(@Param("id") id: string){
        try{
            return this.productsService.getProductById((id))

        }catch{
            throw new BadRequestException("Ha ocurrido un error")
        }
    }

    @Put(":id")
    @UseGuards(AuthGuard)
    async updateProducts(@Param("id") id: string, @Body() productData: any){        
        return this.productsService.upDateProduct(id, productData)
    }

    @Delete(":id")
    @UseGuards(AuthGuard)
    deleteProducts(@Param("id") id: string){
        return this.productsService.deleteProduct((id))
    }

}