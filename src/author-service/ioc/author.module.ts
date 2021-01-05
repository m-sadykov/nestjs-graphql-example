import { Module } from "@nestjs/common";
import { PostModule } from "../../post-service/ioc/post.module";
import { AuthorService } from "../author.service";
import { AUTHOR_SERVICE } from "./ioc";

@Module({
    imports: [
        PostModule
    ],
    providers: [
        {
            provide: AUTHOR_SERVICE,
            useClass: AuthorService
        },
    ],
    exports: [
        {
            provide: AUTHOR_SERVICE,
            useClass: AuthorService
        }
    ]
})
export class AuthorModule { }
