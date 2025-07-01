import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';

/**
 * author
 * title
 * content
 * likeCount
 * connectionCount
 * images
 */

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    id: 1,
    author: 'noname',
    title: '제목없음',
    content: '냉무',
    likeCount: 0,
    commentCount: 0,
  },
  {
    id: 2,
    author: 'noname',
    title: '제목없음2',
    content: '냉무',
    likeCount: 1,
    commentCount: 2,
  },
  {
    id: 3,
    author: 'noname',
    title: '제목없음3',
    content: '냉무',
    likeCount: 3,
    commentCount: 1,
  },
];

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  /**
   * @desc GET /posts
   * @returns
   */
  @Get()
  getPost(): PostModel[] {
    return posts;
  }

  @Get(':id')
  getPostById(@Param('id') id: string, @Param('name') name: string) {
    // path parameter 에서 id 를 가져와서 id 라는 변수에 string 으로 저장한다
    const post = posts.find((post) => post.id === +id);
    if (!post) {
      throw new NotFoundException();
      // {
      //   "message": "Not Found",
      //   "statusCode": 404
      // }
    }
    return post;
  }

  @Get(':name/:title')
  searchPost(@Param('name') name: string, @Param('title') title: string) {
    const post = posts.find(
      (post) => post.title.startsWith(title) && post.author === name,
    );
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  /**
   * @desc POST /posts
   */
  @Post()
  createPost(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    const post: PostModel = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likeCount: 0, // 초기화
      commentCount: 0, // 초기화
    };
    posts = [...posts, post];
    return post;
  }

  @Patch(':id')
  updatePost(
    @Param('id') id: string,
    @Body('author') author?: string, // ?: 옵셔널
    @Body('title') title?: string,
    @Body('content') content?: string,
  ) {
    const post = posts.find((post) => post.id === +id);
    if (!post) {
      throw new NotFoundException();
    }
    if (author) post.author = author;
    if (title) post.title = title;
    if (content) post.content = content;

    posts = posts.map((v) => (v.id === +id ? post : v));
    return post;
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    const post = posts.find((post) => post.id === +id);
    if (!post) {
      throw new NotFoundException();
    }
    posts = posts.filter((v) => v.id !== +id);
    return id;
  }
}
