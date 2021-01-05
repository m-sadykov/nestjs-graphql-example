import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Post {
    @Field(() => Int)
    public id: number;

    @Field()
    public title: string;

    @Field(() => Int, { nullable: true })
    public votes: number;

    @Field(() => Int, { nullable: true })
    public authorId: number;
}
