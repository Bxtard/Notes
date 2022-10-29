import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService){}


  create(createNoteDto: CreateNoteDto) {
    return this.prisma.note.create({
      data: createNoteDto,
    });
  }

  findAll() {
    return this.prisma.note.findMany({
      where: {isArchived: false},
    });
  }
  
  findAllArchived() {
    return this.prisma.note.findMany({
      where: {isArchived: true},
    });
  }

  async findOne(id: string) {
    return this.prisma.note.findUnique({
      where: {id},
    });
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
      return this.prisma.note.update({
        where: { id },
        data:  updateNoteDto,
      })
    
  }

  remove(id: string) {
    return this.prisma.note.delete({
      where: {id},
    });
  }
}
