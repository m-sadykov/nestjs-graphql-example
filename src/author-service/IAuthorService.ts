import { Author } from "./model/contract/Author";

export interface IAuthorService {
    findOneById(authorId: number): Promise<Author>;
}
