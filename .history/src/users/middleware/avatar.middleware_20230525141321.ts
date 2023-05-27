import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor()  /* TODO document why this constructor is empty */ }
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
