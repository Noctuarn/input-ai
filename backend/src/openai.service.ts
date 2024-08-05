import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OpenAIService {
  private readonly apiKey: string = this.config.get<string>('API_KEY');
  private readonly endpoint: string = this.config.get<string>('ENDPOINT');

  constructor(
    private config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async makeRequest(
    prompt: string,
    maxTokens: number,
    temperature: number,
  ): Promise<string> {
    try {
      const response = await lastValueFrom(
        this.httpService.post(
          this.endpoint,
          {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: maxTokens,
            temperature: temperature,
          },
          {
            headers: {
              Authorization: `Bearer ${this.apiKey}`,
              'Content-Type': 'application/json',
            },
          },
        ),
      );

      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error during request:', error);
      throw error;
    }
  }
}
