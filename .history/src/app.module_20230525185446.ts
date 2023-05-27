import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { BirdsModule } from './birds/birds.module';
import { LoggerMiddleware } from './users/middleware/avatar.middleware';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'The Birdly is an 2.0 website to feel and see the birds',
      signOptions: { expiresIn: '60s' },
    }),
    BirdsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
