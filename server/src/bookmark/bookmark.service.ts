import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BookmarkCreationDto, BookmarkEditingDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  createBookmark(userId: number, dto: BookmarkCreationDto) {
    return this.prisma.bookmark.create({
      data: {
        ...dto,
        userId
      }
    });
  }

  getBookmarks(userId: number) {
    return this.prisma.bookmark.findMany({
      where: {
        userId
      }
    });
  }

  getBookmarkById(userId: number, bookmarkId: number) {
    return this.prisma.bookmark.findFirst({
      where: {
        id: bookmarkId,
        userId
      }
    });
  }

  async editBookmark(userId: number, bookmarkId: number, dto: BookmarkEditingDto) {
    const bookmark = await this.prisma.bookmark.findUnique({ where: { id: bookmarkId } });

    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException('Access to resources denied');
    }

    return this.prisma.bookmark.update({ where: { id: bookmarkId }, data: { ...dto } });
  }

  async deleteBookmark(userId: number, bookmarkId: number) {
    const bookmark = await this.prisma.bookmark.findUnique({
      where: {
        id: bookmarkId
      }
    });

    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException('Access to resources denied');
    }

    await this.prisma.bookmark.delete({
      where: {
        id: bookmarkId
      }
    });
  }
}
