import { Injectable } from "@nestjs/common"
import { randomUUID } from "crypto"
import { UserDto } from "./user.entity"

@Injectable()
export class UsuarioService{
    private users:UserDto[] = [{
        name:"ikaro montanari",
        email:"ikaro.montanari@gmail.com",
        nickName:"ikaro.montanari",
        password:"1234",
        createAt: new Date(),
        id: randomUUID(),
    }]

    public searchUser(nameUser:string): UserDto {
        console.log("nome do usuário" , nameUser)
        
        const userEncontrado = this.users.find(user => user.name === nameUser)
        return userEncontrado

        
        
    }

    public createUser(user:UserDto):UserDto{
        console.log(user)
      
        this.users.push(user)
        return user
    }


}