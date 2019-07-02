import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly _userRepository: Repository<User>
    ) {}
    
    getUsers(): Promise<User[]> {
        return this._userRepository.find();
    }
}
