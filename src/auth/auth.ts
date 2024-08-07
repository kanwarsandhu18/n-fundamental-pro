import { Injectable } from '@nestjs/common';

@Injectable()
export class Auth {

    signIn() : string {
        return "Signed In"
    }

    signUp() : string {
        return "Signed Up"
    }
}
