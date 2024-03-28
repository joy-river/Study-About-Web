import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    async addUser(@Body() info): Promise<string[]> {
        return this.userService.addUser(info.name);
    }

    @Delete()
    deleteUser(@Body() info): Promise<string[]> {
        return this.userService.deleteUser(info.name);
    }

    @Get('/:index')
    getUserName(@Param('index') index: number): string {
        return this.userService.getUserName(index);
    }
}
