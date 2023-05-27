import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService,private token ) {}
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
