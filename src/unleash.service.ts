import { Injectable, Logger } from '@nestjs/common';
import { Unleash } from 'unleash-client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UnleashService {
  private readonly logger = new Logger(UnleashService.name);
  private unleash: Unleash;

  constructor(private readonly configService: ConfigService) {
    const url = this.configService.get<string>('UNLEASH_URL')!;
    const appName = this.configService.get<string>('UNLEASH_APP_NAME')!;
    const apiToken = this.configService.get<string>('UNLEASH_API_TOKEN')!;

    this.unleash = new Unleash({
      url,
      appName,
      customHeaders: { Authorization: apiToken },
      refreshInterval: 1000, // 1 second polling interval
    });

    this.unleash.on('ready', () => {
      this.logger.log('Unleash is ready');
    });

    this.unleash.on('error', (err) => {
      this.logger.error('Unleash error', err);
    });
  }

  isEnabled(featureName: string): boolean {
    return this.unleash.isEnabled(featureName);
  }
}
