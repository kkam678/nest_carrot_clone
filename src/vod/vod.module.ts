import { Module } from '@nestjs/common';
import { VodService } from './vod.service';
import { VodController } from './vod.controller';

@Module({
  controllers: [VodController],
  providers: [VodService]
})
export class VodModule {}
