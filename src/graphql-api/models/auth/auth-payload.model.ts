import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../user/user.model";

@ObjectType()
export class AuthPayload {
    @Field()
    public token: string;
    @Field()
    public user: User;
}
