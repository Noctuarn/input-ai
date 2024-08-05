import { Body, Controller, Get, Post } from '@nestjs/common';
import { TextTransformService } from './text_transform.service';
import { TranslateDto } from './dto/translate-text.dto';

@Controller('text-transform')
export class TextTransformController {
  constructor(private readonly textTransformService: TextTransformService) {}

  @Post('translate')
  translateText(@Body() dto: TranslateDto){
    return this.textTransformService.translateText(dto)
  }

  @Post('enhance')
  enhanceText(@Body() body: {text: string}){
    return this.textTransformService.enhanceText(body.text)
  }

  @Post('grammar')
  grammarIssuesCheck(@Body() body: {text: string}){
    return this.textTransformService.grammarIssuesCheck(body.text)
  }

  @Post('generate')
  generateText(@Body() body: {text: string}){
    return this.textTransformService.generateText(body.text)
  }
}
