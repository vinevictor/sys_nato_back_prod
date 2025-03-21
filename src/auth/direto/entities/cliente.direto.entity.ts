import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ClienteDireto {
  @ApiResponseProperty({ type: Number })
  @Expose()
  id: number;

  @ApiResponseProperty({ type: String })
  @Expose()
  nome: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  cpf: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  telefone: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  email: string;

  @ApiResponseProperty({ type: Date })
  @Expose()
  dt_nascimento: Date;

  @ApiResponseProperty({ type: Date })
  @Expose()
  createdAt: Date;

  @ApiResponseProperty({ type: Date })
  @Expose()
  updatedAt: Date;

  @ApiResponseProperty({ type: String })
  @Expose()
  imagemQrcode: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  pixCopiaECola: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  qrcode: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  txid: string;

  @ApiResponseProperty({ type: Number })
  @Expose()
  valor: number;

  @ApiResponseProperty({ type: String })
  @Expose()
  status_pgto: string;

  constructor(partial: Partial<ClienteDireto>) {
    Object.assign(this, partial);
  }
}
