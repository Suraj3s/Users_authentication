import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/Users'),
    JwtModule.register({
      global: true,
      secret: "fun wor"
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
