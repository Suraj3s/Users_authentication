import { Injectable, NestMiddleware } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor() {
    /* TODO document why this constructor is empty */
  }
  use(req: Request, res: Response, next: NextFunction) {
    const upload = MulterModule
    console.log('Request...');
    next();
  }
}
