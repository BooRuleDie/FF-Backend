import { UnleashService } from './unleash.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './types';
import { UnauthorizedException } from '@nestjs/common';

@Controller('/api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private unleash: UnleashService,
  ) {}

  @Get('/users')
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @Get('/developers')
  getDevelopers(): User[] {
    const isFlagEnabled = this.unleash.isEnabled('developer-users');
    if (isFlagEnabled) {
      return this.appService.getDevelopers();
    }
    throw new UnauthorizedException();
  }

  @Get('/admins')
  getAdmins(): User[] {
    const isFlagEnabled = this.unleash.isEnabled('admin-users');
    if (isFlagEnabled) {
      return this.appService.getAdmins();
    }
    throw new UnauthorizedException();
  }

  @Get('/gh-actions')
  githubActions(): string {
    return 'Hi from GH Actions !!!';
  }
}
