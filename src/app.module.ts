import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModel } from 'src/posts/entities/posts.entity';

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      // 데이터베이스 타입
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      database: 'postgres',
      password: 'postgres',
      entities: [PostsModel], // 데이터베이스와 연동할 모델들
      synchronize: true, // 개발환경에서만 true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
