import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { BirdsModule } from './birds/birds.module';

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
export class AppModule implements Nes {}
