import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/Categories/categories.entity";
import { In, Repository } from "typeorm";
import { categoriesMock } from "./categories-mock";


@Injectable()
export class CategorySeeder {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepositori: Repository<Category>
    ){}

    async createSeederCat(){
        const existingCategories = await this.categoryRepositori.find({
            where: {name: In(categoriesMock)},
        })

        for(const categoryName of categoriesMock){
            if(!existingCategories.some((category) => category.name === categoryName)){
            
                const newCategory = new Category()
                newCategory.name = categoryName                
                await this.categoryRepositori.save(newCategory)
                
            }else{
                return "Ya existen categorias"
            }
        }
    }

}