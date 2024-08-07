import { Controller, Get, Post } from '@nestjs/common';
import { Auth } from './auth';

@Controller('auth')
export class AuthController {
    constructor(private authService : Auth){}

    @Post("signin")
    signIn() : string {
        return this.authService.signIn()
    }
    @Post("signup")
    signUp() : string {
        return this.authService.signUp()
    }
}
