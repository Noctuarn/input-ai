import { Module } from '@nestjs/common';
import { TextTransformService } from './text_transform.service';
import { TextTransformController } from './text_transform.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { OpenAIService } from 'src/openai.service';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [TextTransformController],
  providers: [TextTransformService, OpenAIService],
})
export class TextTransformModule {}
