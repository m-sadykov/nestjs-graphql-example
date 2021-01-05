import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Post } from "../post/post.model";

@ObjectType()
export class Author {
    @Field(() => Int)
    public id: number;

    @Field({ nullable: true })
    public firstName?: string;

    @Field({ nullable: true })
    public lastName?: string;

    @Field(() => [Post])
    public posts?: Post[];
}
