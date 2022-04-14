import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BookmarkCreationDto {
  @IsString()
  @IsNotEmpty()
  link: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
