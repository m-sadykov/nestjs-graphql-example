import { Author } from "../graphql-api/models/author/author.model";

export interface IAuthorService {
    findOneById(authorId: number): Promise<Author>;
}
