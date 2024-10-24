import { Injectable } from "@nestjs/common";
import { User } from "./user.interface";


@Injectable()
export class UsersRepository {
    
    private users: User[] = [
        {
            id: 1,
            email: "usuario@gmail.com",
            name: "user1",
            password: "user123",
            address: "cra25, barrio Nuevo Bosque",
            phone: 3127809054,
            country: "colombia",
            city: "cartagena" 
        }
    ];

    async getUsers(page: number, limit: number){
        const startIndex = (page -1) * limit
        const endIndex = (page * limit)
        const paginatedUser = this.users.slice(startIndex, endIndex)
        return paginatedUser.map(({password, ...user}) => user)
        
    }

    async getById(id: number) {
        return this.users.find((user) => {
            return user.id === id
        })
    }

    async createUser(user: User){
        const id = this.users.length + 1
        this.users = [...this.users, {id, ...user}]
        return id
    }

    async findUserByEmail(email: string){
        return this.users.find((user) => user.email === email)
    }

    getUpdate(id: number) {
        const foundUser = this.users.find((user) => user.id === id)
        return foundUser.id
    }

    async getDelete(id: number) {
        const index = this.users.findIndex(u => u.id == id)
        if(index !== -1){
            this.users.splice(index, 1)
            return id
        }
        return "Este usuario no existe"
    }

    
}