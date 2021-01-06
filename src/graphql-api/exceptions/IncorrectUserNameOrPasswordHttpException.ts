import { BadRequestException } from "@nestjs/common";

export class IncorrectUserNameOrPasswordHttpException extends BadRequestException {
    constructor() {
        super({
            message: "Incorrect username or password",
            code: "INCORRECT_USERNAME_OR_PASSWORD"
        });
    }
}
