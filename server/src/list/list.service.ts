import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ListCreationDTO, ListEditingDTO } from './dto';

@Injectable()
export class ListService {
  constructor(private prisma: PrismaService) {}

  createList(userId: number, dto: any) {
    return this.prisma.list.create({
      data: {
        ...dto,
        userId
      }
    });
  }

  // getBookmarks(userId: number) {
  //   return this.prisma.list.findMany({
  //     where: {
  //       userId
  //     }
  //   });
  // }
  //
  // getBookmarkById(userId: number, bookmarkId: number) {
  //   return this.prisma.list.findFirst({
  //     where: {
  //       id: bookmarkId,
  //       userId
  //     }
  //   });
  // }
  //
  // async editBookmark(userId: number, bookmarkId: number, dto: ListEditingDTO) {
  //   const bookmark = await this.prisma.list.findUnique({ where: { id: bookmarkId } });
  //
  //   if (!bookmark || bookmark.userId !== userId) {
  //     throw new ForbiddenException('Access to resources denied');
  //   }
  //
  //   return this.prisma.list.update({ where: { id: bookmarkId }, data: { ...dto } });
  // }
  //
  // async deleteBookmark(userId: number, bookmarkId: number) {
  //   const bookmark = await this.prisma.list.findUnique({
  //     where: {
  //       id: bookmarkId
  //     }
  //   });
  //
  //   if (!bookmark || bookmark.userId !== userId) {
  //     throw new ForbiddenException('Access to resources denied');
  //   }
  //
  //   await this.prisma.list.delete({
  //     where: {
  //       id: bookmarkId
  //     }
  //   });
  // }
}
