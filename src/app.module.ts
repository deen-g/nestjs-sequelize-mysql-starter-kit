import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import keys from './config/kes';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: keys.host,
      port: keys.port,
      username: keys.username,
      password: keys.password,
      database: keys.database,
      models: keys.models,
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
