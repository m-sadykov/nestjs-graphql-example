import { Injectable } from "@nestjs/common";
import { IUserService } from "./IUserService";
import { User } from "./model/contract/User";
import * as bcrypt from "bcryptjs";

@Injectable()
export class UserService implements IUserService {
    private readonly users: User[] = [
        {
            id: "1",
            userName: "john",
            password: bcrypt.hashSync("changeme", 8),
            email: "john@sample.com"
        },
        {
            id: "2",
            userName: "maria",
            password: bcrypt.hashSync("guess", 5),
            email: "maria@sample.com"
        },
    ];

    public async findOne(userName: string): Promise<User> {
        const user = this.users.find(user => user.userName === userName);
        if (!user) {return null;}
        return Promise.resolve(user);
    }

}
