import { Module, CacheInterceptor, CacheModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "PAWIR0MITCHEL",
      "database": "asset_manager",
      "entities": [__dirname + '/**/*.entity{.ts,.js}'],
      "synchronize": false,
      "timezone": 'Z'
    }),
    CacheModule.register()
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    }
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
