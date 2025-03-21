import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDiretoTagDto {
  @ApiProperty({
    description: 'Tags da Solicitação',
    example: '[erro,teste,outra,teste]',
    type: String,
  })
  @IsString({ message: 'tags deve ser uma string' })
  @IsNotEmpty({ message: 'tags é obrigatório' })
  tags: string
}
