

export class UserResponseDto{
    id: string
    name: string
    email: string
    address: string
    country?: string
    city?: string

    constructor(partial: Partial<UserResponseDto>){
        const {id, name, email, address, country, city} = partial
        this.id = id
        this.name = name
        this.email = email
        this.address = address
        this.country = country
        this.city = city
    }
}
