import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService){}
  
  /* create(createCategoryDto: CreateCategoryDto){
    return this.prisma.category.create({
      data: title,
    })
  } */
}
