import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsModel } from 'src/posts/entities/posts.entity';
import { Like, Repository } from 'typeorm';

/**
 * author
 * title
 * content
 * likeCount
 * connectionCount
 * images
 */

export interface PostModel {
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

@Injectable() // => provider 로 사용할 수 있다.
export class PostsService {
  constructor(
    // 모델 생성할 때마다 모델에 해당되는 레포지토리를 주입하고 싶을 때 이하의 포맷으로 작성
    // PostsModel 을 주입한다는 어노테이션 작성
    @InjectRepository(PostsModel)
    // 변수 선언, 레포지토리 타입이고, PostsModel 을 다루는 레포지토리이다
    private readonly postsRepository: Repository<PostsModel>,
  ) {}

  async getAllPosts() {
    /* return posts; */
    return this.postsRepository.find();
  }

  async getPostById(id: number) {
    /* const post = posts.find((post) => post.id === +id);
    if (!post) {
      throw new NotFoundException();
      // {
      //   "message": "Not Found",
      //   "statusCode": 404
      // }
    }
    return post; */
    const post = await this.postsRepository.findOne({
      where: {
        id, // 필터의 조건을 넣음
      },
    });

    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }

  async searchPost(name: string, title: string) {
    /* const post = posts.filter(
      (post) => post.title.startsWith(title) && post.author === name,
    );
    if (post.length <= 0) {
      throw new NotFoundException();
    }
    return post; */

    console.log(name, title);

    const post = await this.postsRepository.find({
      where: {
        author: name,
        title: Like(`%${title}%`),
      },
    });

    if (post.length <= 0) {
      throw new NotFoundException();
    }

    return post;
  }

  async createPost(author: string, title: string, content: string) {
    /* const post: PostModel = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likeCount: 0, // 초기화
      commentCount: 0, // 초기화
    };
    posts = [...posts, post];
    return post; */

    const post = this.postsRepository.create({
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    });

    const newPost = await this.postsRepository.save(post);

    return newPost;
  }

  async updatePost(
    postId: number,
    author?: string,
    title?: string,
    content?: string,
  ) {
    /* const post = posts.find((post) => post.id === +postId);
    if (!post) {
      throw new NotFoundException();
    }
    if (author) post.author = author;
    if (title) post.title = title;
    if (content) post.content = content;

    posts = posts.map((v) => (v.id === +postId ? post : v));
    return post; */

    // save 의 기능
    // 1) id 기준으로 데이터가 존재하지 않으면 새로 생성한다
    // 2) id 기준으로 데이터가 존재하면 업데이트한다
    const post = await this.postsRepository.findOne({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new NotFoundException();
    }

    if (author) post.author = author;
    if (title) post.title = title;
    if (content) post.content = content;

    const newPost = await this.postsRepository.save(post);

    return newPost;
  }

  async deletePost(postId: number) {
    /* const post = posts.find((post) => post.id === +id);
    if (!post) {
      throw new NotFoundException();
    }
    posts = posts.filter((v) => v.id !== +id);
    return id; */

    const post = await this.postsRepository.findOne({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new NotFoundException();
    }

    await this.postsRepository.delete(postId);
    return postId;
  }
}
