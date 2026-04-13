import { Controller, Get } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
    @Get()
    getDashboard() {
        return { message: 'Dashboard data' };
    }

    @Get('UserStats')
    getStats() {
        return { message: 'Dashboard stats' };
    }

}
