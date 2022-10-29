import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AthleteEntity } from '../athlete/athlete.entity';
import { AthleteService } from '../athlete/athlete.service';
import constants from '../shared/security/constants';

@Injectable()
export class AuthService {
    constructor(
        private athleteService: AthleteService,
        private jwtService: JwtService
    ) {}
 
    async validateUser(username: string, password: string): Promise<any> {
        const user: AthleteEntity = await this.athleteService.findOneByEmail(username);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(req: any) {
        const payload = { email: req.user.email, sub: req.user.id };
        return {
            token: this.jwtService.sign(payload, { privateKey: constants.JWT_SECRET }),
            completed: req.user.completed
        };
    }
}
