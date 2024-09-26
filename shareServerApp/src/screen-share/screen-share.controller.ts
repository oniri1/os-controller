import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ScreenShareService } from './screen-share.service';
import { CreateScreenShareDto } from './dto/create-screen-share.dto';

@Controller('screen-share')
export class ScreenShareController {
  constructor(private readonly screenShareService: ScreenShareService) {}

  @Post()
  create(@Body() createScreenShareDto: CreateScreenShareDto) {}
}
