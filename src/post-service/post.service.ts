import { Injectable } from "@nestjs/common";
import { IPostService } from "./IPostService";
import { GetPostQueryParams } from "./model/contract/GetPostQueryParams";
import { UpvoteParams } from "./model/contract/UpvoteParams";
import { Post } from "./model/contract/Post";

@Injectable()
export class PostService implements IPostService {
    public posts: Post[] = [
        {
            id: 1,
            title: "Post 1",
            votes: 1,
            authorId: 1
        },
        {
            id: 2,
            title: "Post 2",
            votes: 2,
            authorId: 1
        },
        {
            id: 3,
            title: "Post 3",
            votes: 3,
            authorId: 3
        },

    ];
    public async findAll(queryParams: GetPostQueryParams): Promise<Post[]> {
        if (queryParams.authorId) {
            return Promise.resolve(
                this.posts.filter(post => post.authorId === queryParams.authorId)
            );
        }
        return Promise.resolve(this.posts);
    }

    public async upvoteById(upvoteParams: UpvoteParams): Promise<Post> {
        const post = this.posts.find(p => p.id === upvoteParams.postId);
        if (!post) { return null; }
        
        post.votes = post.votes + 1;
        return Promise.resolve(post);
    }
}
