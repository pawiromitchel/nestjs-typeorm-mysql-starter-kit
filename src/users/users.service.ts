import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly _userRepository: Repository<User>
    ) { }

    getAll(): Promise<User[]> {
        return this._userRepository.find();
    }

    getOne(id: string) {
        return this._userRepository.findOne(id);
    }

    create(user: User) {
        return this._userRepository.save(user);
    }

    update(user: User) {
        return this._userRepository.update(user.id, user);
    }
}
