import { User } from "./model/contract/User";

export interface IUserService {
    findOne(userName: string): Promise<User>
}
