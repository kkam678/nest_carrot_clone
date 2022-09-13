import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VodService } from './vod.service';
import { CreateVodDto } from './dto/create-vod.dto';
import { UpdateVodDto } from './dto/update-vod.dto';

@Controller('vod')
export class VodController {
  constructor(private readonly vodService: VodService) {}

  @Post()
  create(@Body() createVodDto: CreateVodDto) {
    return this.vodService.create(createVodDto);
  }

  @Get()
  findAll() {
    return this.vodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVodDto: UpdateVodDto) {
    return this.vodService.update(+id, updateVodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vodService.remove(+id);
  }
}
