import { GetPostQueryParams } from "./model/contract/GetPostQueryParams";
import { UpvoteParams } from "./model/contract/UpvoteParams";
import { Post } from "../graphql-api/models/post/post.model";

export interface IPostService {
    findAll(queryParams: GetPostQueryParams): Promise<Post[]>
    upvoteById(upvoteParams: UpvoteParams): Promise<Post>
}
