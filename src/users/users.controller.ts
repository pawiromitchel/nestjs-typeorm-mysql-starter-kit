import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly _userService: UsersService) { }

    @Get()
    getUsers(): Promise<User[]> {
        return this._userService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        return this._userService.getOne(id);
    }

    @Post()
    insert(@Body() body: User) {
        return this._userService.create(body);
    }

    @Put()
    update(@Body() body: User){
        return this._userService.update(body);
    }

    @Post('/authenticate')
    authenticate(@Body() body: User){
        return this._userService.authenticate(body);
    }
}
