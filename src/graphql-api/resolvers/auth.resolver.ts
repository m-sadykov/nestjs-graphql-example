import { Inject, UseFilters } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { IAuthService } from "../../auth-service/IAuthService";
import { AUTH_SERVICE } from "../../auth-service/ioc/ioc";
import { BadRequestExceptionFilter } from "../filters/BadRequestException.filter";
import { NotFoundExceptionFilter } from "../filters/NotFoundException.filter";
import { AuthPayload } from "../models/auth/auth-payload.model";

@Resolver(() => AuthPayload)
@UseFilters(NotFoundExceptionFilter, BadRequestExceptionFilter)
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
