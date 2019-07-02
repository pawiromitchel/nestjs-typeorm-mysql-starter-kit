import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly _userService: UsersService) { }

    @Get()
    getUsers(): any {
        return this._userService.getUsers();
    }

    @Post()
    insertUser(
        @Body('username') username: string,
        @Body('password') password: string,
    ): any {
        return { username: username, password: password };
    }
}
