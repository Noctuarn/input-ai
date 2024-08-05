import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TextTransformModule } from './text_transform/text_transform.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TextTransformModule, ConfigModule.forRoot(), HttpModule],
  controllers: [AppController],
})
export class AppModule {}
