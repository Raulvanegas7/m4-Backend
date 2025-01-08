
import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoryService } from "./categories.service";
import { CategorySeeder } from "src/seeder/categories/categories.seed";
import { CreateCategoryDto } from "./dto/create-category.dto";


@Controller("categories")
export class CategoriesController{
    constructor(
        private readonly categoryService: CategoryService,
        private readonly categorySeeder: CategorySeeder
    ){}
    
    @Post("seeder")
    seeder(){
        return this.categorySeeder.createSeederCat()
    }

    @Post()
    createCategories(@Body() createCategoryDto: CreateCategoryDto ){
        return this.categoryService.createCategory(createCategoryDto)
    }
    
    @Get()
    getCategories(){
        return this.categoryService.getCategory()
    }

}
