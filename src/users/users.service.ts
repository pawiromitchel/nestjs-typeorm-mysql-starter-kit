import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

const bcrypt = require('bcrypt');
const saltRounds = 10;

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
        user.password = bcrypt.hashSync(user.password, saltRounds);
        return this._userRepository.save(user);
    }

    update(user: User) {
        return this._userRepository.update(user.id, user);
    }

    async authenticate(user: User) {
        const foundUser = await this._userRepository
            .createQueryBuilder('u')
            .addSelect('u.password')
            .where('u.username = :username')
            .setParameters({ username: user.username })
            .getOne();
        if(bcrypt.compareSync(user.password, foundUser.password)){
            delete foundUser.password;
            return foundUser;
        } else {

        }
    }
}
