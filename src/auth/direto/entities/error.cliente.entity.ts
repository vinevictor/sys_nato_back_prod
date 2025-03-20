import { ApiProperty } from '@nestjs/swagger';

export class ErrorClienteDiretoType {
  @ApiProperty({
    description: 'Mensagem de erro',
    type: String,
  })
  message: string;
}
