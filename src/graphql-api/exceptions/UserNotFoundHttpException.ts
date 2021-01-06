import { NotFoundException } from "@nestjs/common";

export class UserNotFoundHttpException extends NotFoundException {
    constructor(userName: string) {
        super({
            message: `User ${userName} not found`,
            code: "USER_NOT_FOUND",
            data: [userName]
        });
    }
}
