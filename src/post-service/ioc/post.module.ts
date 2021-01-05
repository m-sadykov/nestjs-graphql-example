import { Module } from "@nestjs/common";
import { PostService } from "../post.service";
import { POST_SERVICE } from "./ioc";

@Module({
    providers: [
        {
            provide: POST_SERVICE,
            useClass: PostService
        }
    ],
    exports: [
        {
            provide: POST_SERVICE,
            useClass: PostService
        }
    ]
})
export class PostModule { }
