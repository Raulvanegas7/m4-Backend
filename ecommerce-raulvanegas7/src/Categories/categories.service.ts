import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./categories.entity";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Injectable()
export class CategoryService{
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ){}

        createCategory(createCategoryDto: CreateCategoryDto){
            return this.categoryRepository.save(createCategoryDto)
        }
        
        getCategory(){
            return this.categoryRepository.find()
        }


}



















// this.seederCategory()   
        
        // async seederCategory(){

        //     const seederCategory = [
        //         {"name": "smartphone"},
        //         {"name": "monitor"},
        //         {"name": "keyboard"},
        //         {"name": "mouse"}
        //     ]

        //     const existingCategory = (await this.getCategory())
        //     if(existingCategory.length > 0){                      
        //         return "Ya existen categorias..."
        //     } else{
        //         this.createCategory(seederCategory)                
        //     }            
        //     return "Se han creado las categorias"
        // }