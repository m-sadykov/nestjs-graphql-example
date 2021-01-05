import { Injectable } from "@nestjs/common";
import { IAuthorService } from "./IAuthorService";
import { Author } from "./model/contract/Author";

@Injectable()
export class AuthorService implements IAuthorService {
    public async findOneById(authorId: number): Promise<Author> {
        return Promise.resolve({
            id: authorId,
            firstName: "Marat",
            lastName: "Sadykov",
        });
    }
}
