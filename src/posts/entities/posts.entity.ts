import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // 자동으로 테이블을 생성하는! typeorm 기능
export class PostsModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  likeCount: number;

  @Column()
  commentCount: number;
}
