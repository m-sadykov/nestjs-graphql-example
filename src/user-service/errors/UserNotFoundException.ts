import { GraphQLError } from "graphql";

export class UserNotFoundError extends GraphQLError {
    constructor (public readonly userName: string) {
        super(`User with username ${userName} not found.`);
    }
}
