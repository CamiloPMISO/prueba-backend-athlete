import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import constants from '../shared/security/constants';
import { JwtStrategy } from './strategies/jwt.strategy';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: constants.JWT_SECRET,
      signOptions: { expiresIn: constants.JWT_EXPIRES_IN },
    })
  ],
providers: [JwtService, JwtStrategy],
exports: [], controllers: []
})
export class AuthModule {}
