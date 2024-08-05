import { Injectable } from '@nestjs/common';
import { TranslateDto } from './dto/translate-text.dto';
import { OpenAIService } from 'src/openai.service';

@Injectable()
export class TextTransformService {
  constructor(private readonly openai: OpenAIService) {}

  //* Translate text from the any language
  async translateText({ text, language }: TranslateDto) {
    const prompt = `Please translate the following text to ${language}: ${text}`;
    return this.openai.makeRequest(prompt, 100, 0.3);
  }

  //* Make text sounds more better
  async enhanceText(text: string) {
    const prompt = `Please improve the following text to make it more engaging and polished: ${text}`;
    return this.openai.makeRequest(prompt, 100, 0.3);
  }

  //* Check sentances for the grammar mistakes
  async grammarIssuesCheck(text: string): Promise<string> {
    const prompt = `Please rephrase the following text to improve clarity and conciseness: ${text}`;
    return this.openai.makeRequest(prompt, 150, 0.5);
  }

  //* Generate text based on the given start
  async generateText(text: string): Promise<string> {
    const prompt = `Continue the following text in a coherent and engaging manner: ${text}`;
    return this.openai.makeRequest(prompt, 150, 0.7);
  }
}
