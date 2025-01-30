import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards/google-auth/google-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.register(email, password);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.login(email, password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('welcome')
  async welcome() {
    return { message: 'Welcome to the protected route' };
  }

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  async googleLogin() {
    // Initiates Google OAuth2 login flow
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleCallback(@Req() req, @Res() res) {
    const response = await this.authService.loginWithEmail(req.user.email);

    res.redirect('http://localhost:5173?token=' + response.token);
  }
}
