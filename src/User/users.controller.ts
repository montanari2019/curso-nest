import { Body, Controller, Post, Get, Param } from "@nestjs/common"
import { UserDto } from "./user.entity"
import { UsuarioService } from "./user.service"


@Controller("users")
export class UserController {
    // private usersServices = new UsuarioService()

    constructor(private userService: UsuarioService){}

    @Post()
    public createUser(@Body() user:UserDto){
        
        const userCriado =  this.userService.createUser(user)

        return userCriado
    }

    @Get(':nameUser')
    public getUser(@Param('nameUser') nameUser:string){
        // console.log(nameUser)
        const user = this.userService.searchUser(nameUser)

        return user
    }
}