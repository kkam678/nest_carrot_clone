import { Expose } from 'class-transformer';

export class Auth {
    @Expose()
    accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }
}
