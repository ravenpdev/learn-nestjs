import { CreateMessageDto } from './create-mesage.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMessageDto extends PartialType(CreateMessageDto) {}
