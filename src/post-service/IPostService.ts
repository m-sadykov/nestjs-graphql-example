import { GetPostQueryParams } from "./model/contract/GetPostQueryParams";
import { Post } from "./model/contract/Post";
import { UpvoteParams } from "./model/contract/UpvoteParams";

export interface IPostService {
    findAll(queryParams: GetPostQueryParams): Promise<Post[]>
    upvoteById(upvoteParams: UpvoteParams): Promise<Post>
}
