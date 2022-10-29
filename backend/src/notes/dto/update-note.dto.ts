import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateNoteDto } from './create-note.dto';

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
  @ApiProperty()
  title: string;
  
  @ApiProperty()
  content: string;
  
  @ApiProperty({required: false})
  categories?: string[];

  @ApiProperty()
  isArchived: boolean
}
