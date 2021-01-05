import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpvotePostInput {
    @Field()
    public postId: number;
}
