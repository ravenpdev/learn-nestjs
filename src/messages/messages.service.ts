import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-mesage.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  find() {
    return this.messagesRepository.finAll();
  }

  create(createMessageDto: CreateMessageDto) {
    return this.messagesRepository.create(createMessageDto.content);
  }

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  findOneAndUpdate(id: string, updateMessageDto: UpdateMessageDto) {
    return `${id} has been updated`;
  }

  findOneAndDelete(id: number) {
    return `${id} has been deleted`;
  }
}
