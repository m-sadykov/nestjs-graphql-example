import { Inject, Injectable } from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { UserNotFoundError } from "../user-service/errors/UserNotFoundException";
import { USER_SERVICE } from "../user-service/ioc/ioc";
import { IUserService } from "../user-service/IUserService";
import { IncorrectUserNameOrPasswordError } from "./errors/IncorrectUserNameOrPasswordError";
import { IAuthService } from "./IAuthService";
import { AuthPayload } from "./model/contract/AuthPayload";

@Injectable()
export class AuthService implements IAuthService {
    constructor (
        @Inject(USER_SERVICE) private readonly userService: IUserService
    ) {}

    public async login(userName: string, password: string): Promise<AuthPayload> {
        const user = await this.userService.findOne(userName);

        if(!user) {
            throw new UserNotFoundError(userName);
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new IncorrectUserNameOrPasswordError();
        }

        const token = jwt.sign(
            {id: user.id, userName: user.userName},
            process.env.JWT_SECRET,
            {expiresIn: "30m"}
        );

        return { token, user };
    }

}
