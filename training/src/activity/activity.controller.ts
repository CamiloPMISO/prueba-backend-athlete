import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { TrainingAdditionalDataEntity } from '../training-additional-data/training-additional-data.entity';
import { TrainingAdditionalDataService } from '../training-additional-data/training-additional-data.service';
import { ActivityService } from './activity.service';
import { SetTimeDto } from './dto/set-time.dto'

@Controller('activity')
export class ActivityController {
    constructor(
        private readonly activityService: ActivityService,
        private readonly trainingDataService: TrainingAdditionalDataService,
      ) {}
    
    @UseGuards(JwtAuthGuard)
    @Get(':activityId')
    async findOne(@Param('activityId') activityId: string) {
      return await this.activityService.findOne(activityId);
    }

    @UseGuards(JwtAuthGuard)
    @Post(':activityId/set_start')
    async set_start(@Param('activityId') activityId: string, @Body() time_to_set: SetTimeDto ) {
      const activity =  await this.activityService.findOne(activityId);
      let trainingData = new TrainingAdditionalDataEntity()
      trainingData.started_at = time_to_set.time;
      trainingData = await this.trainingDataService.create(trainingData)
      activity.trainingAdditionalData = trainingData;
      return await this.activityService.update(activityId, activity)
    }

    @UseGuards(JwtAuthGuard)
    @Post(':activityId/set_end')
    async set_end(@Param('activityId') activityId: string, @Body() time_to_set: SetTimeDto ) {
        const activity =  await this.activityService.findOne(activityId);
        const trainingData = activity.trainingAdditionalData
        trainingData.ended_at = time_to_set.time
        await this.trainingDataService.update(trainingData.id, trainingData)
        return await this.activityService.findOne(activityId);
    }

}
