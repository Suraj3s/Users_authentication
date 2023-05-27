import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://Cluster92282:soorajdiya@cluster92282.qk0mpwb.mongodb.net/?retryWrites=true&w=majority/Users',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
