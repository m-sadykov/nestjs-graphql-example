export class UserNotFoundError extends Error {
    constructor (public readonly userName: string) {
        super(`User with username ${userName} not found.`);
    }
}
