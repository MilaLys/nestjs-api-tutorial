import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
  HttpStatus,
  ParseIntPipe
} from '@nestjs/common';

import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { ListCreationDTO, ListEditingDTO } from './dto';
import { ListService } from './list.service';

@ApiTags('lists')
@UseGuards(JwtGuard)
@Controller('lists')
export class ListController {
  constructor(private listService: ListService) {}

  @Post()
  createList(@GetUser('id') userId: number, @Body() dto: ListCreationDTO) {
    return this.listService.createList(userId, dto);
  }

  // @Get()
  // getBookmarks(@GetUser('id') userId: number) {
  //   return this.listService.getBookmarks(userId);
  // }
  //
  // @Get(':id')
  // getBookmarkById(@GetUser('id') userId: number, @Param('id', ParseIntPipe) bookmarkId: number) {
  //   return this.listService.getBookmarkById(userId, bookmarkId);
  // }
  //
  // @Patch(':id')
  // editBookmark(
  //   @GetUser('id') userId: number,
  //   @Param('id', ParseIntPipe) bookmarkId: number,
  //   @Body() dto: ListEditingDTO
  // ) {
  //   return this.listService.editBookmark(userId, bookmarkId, dto);
  // }
  //
  // @ApiOkResponse()
  // @HttpCode(HttpStatus.NO_CONTENT)
  // @Delete(':id')
  // deleteBookmark(@GetUser('id') userId: number, @Param('id', ParseIntPipe) bookmarkId: number) {
  //   return this.listService.deleteBookmark(userId, bookmarkId);
  // }
}
