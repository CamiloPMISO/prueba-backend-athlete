import { Controller, Get, UseGuards, Headers } from '@nestjs/common';
import { TemplateTrainingPlantService } from '../template-training-plant/template-training-plant.service';
import { AthleteService } from '../athlete/athlete.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('sport-profile')
export class SportProfileController {
  constructor(
    private readonly athleteService: AthleteService,
    private readonly templatesService: TemplateTrainingPlantService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProfile(@Headers() headers: Record<string, string>) {
    const athlete = await this.athleteService.getAthleteByToken(
      headers.authorization,
    );
    // const templates = await this.templatesService.findByCity(athlete.cityOfResidence.id)
    const templates = await this.templatesService.findAll();

    const pointsList = [];
    let pointsMax = 0;
    templates.forEach((template) => {
      let points = 0;
      const sports = template.sports.split('|');
      athlete.sports.forEach((athleteSport) => {
        if (sports.indexOf(athleteSport.id) != -1) {
          points++;
        } else if (points >= 0) {
          points--;
        }
      });
      pointsList.push(points);
      if (points > pointsMax) pointsMax = points;
    });

    const indexOfTemplateSelected = pointsList.indexOf(pointsMax);

    return { athlete, sportsProfile : templates[indexOfTemplateSelected]};
  }
}
