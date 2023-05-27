import { IsString } from "class-validator";

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
    
}