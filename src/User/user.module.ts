import { Module } from "@nestjs/common";
import { IsNickeNameisUniqueConstraint } from "./user-unique.validatior";
import { UsuarioService } from "./user.service";
import { UserController } from "./users.controller";


@Module({
    controllers:[UserController],
    providers:[UsuarioService, IsNickeNameisUniqueConstraint],

})
export class UserModule{}