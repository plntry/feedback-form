import { Module } from '@nestjs/common';
import { FeedbackModule } from './feedbacks/feedback.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigService } from './config/sequelizeConfig.service';
import { databaseConfig } from './config/configuration';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MassiveModule } from '@nestjsplus/massive';

@Module({
  imports: [
    // MassiveModule.register({
    //   user: process.env.POSTGRES_USERNAME || 'tmyagweineztsl',
    //   password:
    //     process.env.POSTGRES_PASSWORD ||
    //     '17ebd0b9b283880196bde9dfb10cf98d4ed313cb7174d082ed9215b3f04839fc',
    //   host:
    //     process.env.POSTGRES_HOST ||
    //     'ec2-99-81-137-11.eu-west-1.compute.amazonaws.com',
    //   port: 5432,
    //   database: process.env.POSTGRES_DATABASE || 'd17k52de82h4qb',
    // }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
    FeedbackModule,
  ],
})
export class AppModule {}
