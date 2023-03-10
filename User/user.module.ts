import { Module } from "@nestjs/common";
import { UsuarioService } from "./user.service";
import { UserController } from "./users.controller";


@Module({
    controllers:[UserController],
    providers:[UsuarioService],

})
export class UserModule{}