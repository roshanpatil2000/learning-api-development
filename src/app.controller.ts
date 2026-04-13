import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody, ApiDefaultResponse, ApiResponse } from '@nestjs/swagger';
import { APP_FILTER } from '@nestjs/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    description: 'Successful response',
    status: 200,
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    
   
  })
  getHello(): { message: string, timestamp: string } {
    return this.appService.getHello();
  }
}
