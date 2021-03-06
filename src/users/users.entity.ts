import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({select: false})
    password: string;

    @Column()
    email: string;

    @Column('datetime')
    updated_at: Date;

    @Column('datetime')
    created_at: Date;
}