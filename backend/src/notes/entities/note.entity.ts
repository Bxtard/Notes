import { ApiProperty } from "@nestjs/swagger";
import { Note } from "@prisma/client";

export class NoteEntity implements Note{
  @ApiProperty()
  id: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @ApiProperty({required: false, nullable: true})
  categories: string[] | null;
  @ApiProperty()
  isArchived: boolean
}
