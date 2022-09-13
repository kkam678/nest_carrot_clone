import { Injectable } from '@nestjs/common';
import { CreateVodDto } from './dto/create-vod.dto';
import { UpdateVodDto } from './dto/update-vod.dto';

@Injectable()
export class VodService {
  create(createVodDto: CreateVodDto) {
    return 'This action adds a new vod';
  }

  findAll() {
    return `This action returns all vod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vod`;
  }

  update(id: number, updateVodDto: UpdateVodDto) {
    return `This action updates a #${id} vod`;
  }

  remove(id: number) {
    return `This action removes a #${id} vod`;
  }
}
