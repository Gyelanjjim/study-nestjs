import { Injectable, NotFoundException } from '@nestjs/common';

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

@Injectable()
export class PostsService {
  getAllPosts() {
    return posts;
  }

  getPostById(id: number) {
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

  searchPost(title: string, name: string) {
    const post = posts.filter(
      (post) => post.title.startsWith(title) && post.author === name,
    );
    if (post.length <= 0) {
      throw new NotFoundException();
    }
    return post;
  }

  createPost(author: string, title: string, content: string) {
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

  updatePost(
    postId: number,
    author?: string,
    title?: string,
    content?: string,
  ) {
    const post = posts.find((post) => post.id === +postId);
    if (!post) {
      throw new NotFoundException();
    }
    if (author) post.author = author;
    if (title) post.title = title;
    if (content) post.content = content;

    posts = posts.map((v) => (v.id === +postId ? post : v));
    return post;
  }

  deletePost(id: string) {
    const post = posts.find((post) => post.id === +id);
    if (!post) {
      throw new NotFoundException();
    }
    posts = posts.filter((v) => v.id !== +id);
    return id;
  }
}
