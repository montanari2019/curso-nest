import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { IsNickeNameisUnique } from './user-unique.validatior';

export class UserDto {
  @IsString({message: 'id deve ser do tipo string'})
  id: string;

  @IsNotEmpty({message: 'Campo do nome de usuário não pode ser vazio'})
  @IsString({message: 'Nome deve ser do tipo string'})
  name: string;

  @IsEmail()
  @IsString({message: 'email deve ser do tipo string'})
  email: string;

  @IsNotEmpty({message: 'nome de usuário não pode ser vazio'})
  @IsString({message: 'nome de usuário deve ser do tipo string'})
  @IsNickeNameisUnique({message:"nome de usuario ja existe"})
  nickName: string;

  @IsNotEmpty({message: 'passwor não deve ser vazio'})
  @IsString({message: 'senha deve ser do tipo string'})
  password: string;

  createAt: Date;

 
}
