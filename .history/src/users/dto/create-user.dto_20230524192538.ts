import { ValidationError } from '@nestjs/common';
import { ValidatorOptions } from '@nestjs/common/interfaces/external/validator-options.interface';
import {
  IsDataURI,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsStrongPassword,
  IsUrl,
} from 'class-validator';

export interface User_interface {
  User_name: string;
  User_logo: string;
  User_age: number;
  User_email: string;
  User_passcode: string;
  permission: boolean;
  date: Date;
}

export class verify_identity {
  @IsString()
  User_name: string;

  @IsUrl()
  User_logo: string;

  @IsNumber()
  User_age: number;

  @IsEmail()
  User_email: string;

  @IsNotEmpty()
  User_passcode: string;

  permission: any;
}

export interface ValidationPipeOptions extends ValidatorOptions {
  transform?: boolean;
  disableErrorMessages?: boolean;
  exceptionFactory?: (errors: ValidationError[]) => any;
}
