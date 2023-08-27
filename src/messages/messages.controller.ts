import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-mesage.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @Get()
  all() {
    return this.messageService.find();
  }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);

    console.log(message);
    if (!message) {
      throw new NotFoundException('message not found!');
    }

    return message;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messageService.findOneAndUpdate(id, updateMessageDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.messageService.findOneAndDelete(id);
  }
}
