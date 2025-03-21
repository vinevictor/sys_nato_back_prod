import { ApiResponseProperty } from "@nestjs/swagger";

export class DiretoTag {
  @ApiResponseProperty({ type: Number })
  id: number;

  @ApiResponseProperty({ type: Number })
  solicitacao: number;

  @ApiResponseProperty({ type: Date })
  createdAt: Date;

  @ApiResponseProperty({ type: Date })
  updatedAt: Date;

  @ApiResponseProperty({ type: String })
  tags: string;
}
