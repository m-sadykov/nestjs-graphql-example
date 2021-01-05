import { Module } from "@nestjs/common";
import { UserService } from "../user.service";
import { USER_SERVICE } from "./ioc";

@Module({
    providers: [
        {
            provide: USER_SERVICE,
            useClass: UserService
        }
    ],
    exports: [
        {
            provide: USER_SERVICE,
            useClass: UserService
        }
    ],
})
export class UserModule {}
