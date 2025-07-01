import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  // IoC Container 가 알아서 인스턴스화해서 주입하게 하도록 class 만 그대로 입력한다
  controllers: [PostsController],
  // Sevice: 데이터를 다루는 로직, 입력해줘야 주입된다!
  providers: [PostsService],
})
export class PostsModule {}
