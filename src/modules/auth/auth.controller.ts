import { Controller, Get } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    @Get('login')
    @ApiBody({
        description: 'Login credentials',
        schema: {
            type: 'object',
            properties: {
                username: { type: 'string' },
                password: { type: 'string' },
            },
        },
    })
    login() {
        return { message: 'Login successful' };
    }

    @Get('register')
    register() {
        return { message: 'Registration successful' };
    }

    @Get('logout')
    logout() {
        return { message: 'Logout successful' };
    }
}
