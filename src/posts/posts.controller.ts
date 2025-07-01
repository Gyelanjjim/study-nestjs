import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

/**
 * author
 * title
 * content
 * likeCount
 * connectionCount
 * images
 */

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  connectionCount: number;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  /**
   * @desc GET /post
   * @returns
   */
  @Get()
  getPost(): Post {
    return {
      author: '배성태',
      title: '구름껴도맑음',
      content: '달콤한 신혼의 모든 순간',
      likeCount: 10,
      connectionCount: 100,
    };
  }
}
