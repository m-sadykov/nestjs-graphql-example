import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field()
    public id: string;
    @Field()
    public userName: string;
    @Field()
    public email: string;
}
