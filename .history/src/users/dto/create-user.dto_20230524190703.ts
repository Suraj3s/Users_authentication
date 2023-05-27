import {
    IsBoolean,
  IsDataURI,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
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

  @IsDataURI()
  User_logo: string;

  @IsNumber()
  User_age: number;

  @IsEmail()
  User_email: string;

  @IsNotEmpty()
  User_passcode: string;

  @IsBoolean()
  permission: boolean;

  @IsDa

}
