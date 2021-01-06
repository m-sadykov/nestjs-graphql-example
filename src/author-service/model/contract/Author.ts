import { Post } from "../../../post-service/model/contract/Post";

export interface Author {
    id: number;
    firstName?: string;
    lastName?: string;
    posts?: Post[]
}
