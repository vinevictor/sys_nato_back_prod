import { ApiProperty } from '@nestjs/swagger';

export class ErrorDiretoTagsType {
  @ApiProperty({
    description: 'Mensagem de erro',
    type: String,
  })
  message: string;
}
