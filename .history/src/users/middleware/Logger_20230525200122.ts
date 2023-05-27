import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private jwtService:JWT){

  }
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
