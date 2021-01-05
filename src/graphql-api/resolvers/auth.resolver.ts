import { Inject } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { IAuthService } from "../../auth-service/IAuthService";
import { AUTH_SERVICE } from "../../auth-service/ioc/ioc";
import { AuthPayload } from "../models/auth/auth-payload.model";

@Resolver(() => AuthPayload)
export class AuthResolver {
    constructor (
        @Inject(AUTH_SERVICE) private readonly authService: IAuthService
    ) {}

    @Mutation(() => AuthPayload)

    public async login(
        @Args("userName", {type: () => String}) userName: string,
        @Args("password", {type: () => String}) password: string
    ): Promise<AuthPayload> {
        return this.authService.login(userName, password);
    }
}
