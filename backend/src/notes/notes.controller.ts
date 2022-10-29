import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { NoteEntity } from './entities/note.entity';

@Controller('notes')
@ApiTags('Notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @ApiCreatedResponse({ type: NoteEntity })
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  @ApiCreatedResponse({ type: NoteEntity, isArray: true })
  findAll() {
    return this.notesService.findAll();
  }
  
  @Get('archived')
  @ApiCreatedResponse({ type: NoteEntity, isArray: true })
  findAllArchived() {
    return this.notesService.findAllArchived();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: NoteEntity })
  async findOne(@Param('id') id: string) {
    const note = await this.notesService.findOne(id);

    if (!note) {
      throw new NotFoundException(`Note with id: ${id} not found`);
    }

    return note;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: NoteEntity })
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: NoteEntity })
  remove(@Param('id') id: string) {
    return this.notesService.remove(id);
  }
}
