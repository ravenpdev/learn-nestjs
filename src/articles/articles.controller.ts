import { Controller, Get, Param } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
  @Get()
  findAll() {
    return 'all articles';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `article with the id of ${id}`;
  }
}
