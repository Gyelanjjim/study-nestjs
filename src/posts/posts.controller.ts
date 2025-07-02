import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  // NestJS IoC Container 에서 주입할 서비스를 자동으로 생성해준다
  // => posts.module.ts 로 가시오
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPost() {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    // path parameter 에서 id 를 가져와서 id 라는 변수에 string 으로 저장한다
    return this.postsService.getPostById(+id);
  }

  @Get(':name/:title')
  searchPost(@Param('name') name: string, @Param('title') title: string) {
    return this.postsService.searchPost(name, title);
  }

  @Post()
  createPost(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    return this.postsService.createPost(author, title, content);
  }

  @Patch(':id')
  updatePost(
    @Param('id') id: string,
    @Body('author') author?: string, // ?: 옵셔널
    @Body('title') title?: string,
    @Body('content') content?: string,
  ) {
    return this.postsService.updatePost(+id, author, title, content);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(+id);
  }
}
