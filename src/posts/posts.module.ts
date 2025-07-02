import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModel } from 'src/posts/entities/posts.entity';

@Module({
  imports: [
    // TypeOrmModule.forRoot() : 타입ORM에 연결설정 시 사용
    // 모델 레포지토리 주입 시 사용
    // 레포지토리: 모델을 다루는 클래스
    TypeOrmModule.forFeature([PostsModel]),
  ],
  // IoC Container 가 알아서 인스턴스화해서 주입하게 하도록 class 만 그대로 입력한다
  controllers: [PostsController],
  // Sevice: 데이터를 다루는 로직, 입력해줘야 주입된다!
  providers: [PostsService],
})
export class PostsModule {}
