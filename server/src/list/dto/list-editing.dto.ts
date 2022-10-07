import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ListEditingDTO {
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
