import { Injectable } from '@nestjs/common/decorators';
import { registerDecorator,  ValidationArguments,  ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UsuarioService } from './user.service';


@Injectable()
@ValidatorConstraint()
export class IsNickeNameisUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private userService: UsuarioService ){}
  
  validate(userName: string, args?: ValidationArguments) {
    const user = this.userService.searchUser(userName)
    if(!user){
      return true
    }else{
      return false
    }
  }
}

export function IsNickeNameisUnique(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNickeNameisUniqueConstraint,
    });
  };
}
