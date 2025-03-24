import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ClienteDiretoUnico {
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
  email: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  dt_solicitacao: string;

  @ApiResponseProperty({ type: Number })
  @Expose()
  corretor: number;

  @ApiResponseProperty({ type: Number })
  @Expose()
  construtora: number;

  @ApiResponseProperty({ type: String })
  @Expose()
  telefone: string;

  @ApiResponseProperty({ type: Date })
  @Expose()
  dt_nascimento: Date;


  @ApiResponseProperty({ type: String })
  @Expose()
  ass_doc: string;


  @ApiResponseProperty({ type: String })
  @Expose()
  link_doc: string;


  @ApiResponseProperty({ type: Number })
  @Expose()
  id_fcw: number;


  @ApiResponseProperty({ type: String })
  @Expose()
  obs: string;


  @ApiResponseProperty({ type: String })
  @Expose()
  alert: string;


  @ApiResponseProperty({ type: Number })
  @Expose()
  empreedimento: number;


  @ApiResponseProperty({ type: String })
  @Expose()
  cnh: string;

  @ApiResponseProperty({ type: Boolean })
  @Expose()
  ativo: boolean;

  @ApiResponseProperty({ type: String })
  @Expose()
  uploadCnh: string;


  @ApiResponseProperty({ type: String })
  @Expose()
  relacionamento: string;
  

  @ApiResponseProperty({ type: Date })
  @Expose()
  createdAt: Date;

  @ApiResponseProperty({ type: Date })
  @Expose()
  updatedAt: Date;

  
  @ApiResponseProperty({ type: Number })
  @Expose()
  financeiro: number;


  @ApiResponseProperty({ type: Boolean })
  @Expose()
  distrato: boolean;


  @ApiResponseProperty({ type: String })
  @Expose()
  logDelete: string;
  
  @ApiResponseProperty({ type: String })
  @Expose()
  status_aprovacao: string;


  @ApiResponseProperty({ type: String })
  @Expose()
  Andamento: string;


  @ApiResponseProperty({ type: String })
  @Expose()
  dt_Aprovacao: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  type_validacao: string;


  @ApiResponseProperty({ type: String })
  @Expose()
  dt_agendamento: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  mult_link: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  mult_ass_doc: string;

  @ApiResponseProperty({ type: Date })
  @Expose()
  hr_aprovacao: Date;

  @ApiResponseProperty({ type: String })
  @Expose()
  status_pgto: string;

  @ApiResponseProperty({ type: Number })
  @Expose()
  valorcd: number;
  
  @ApiResponseProperty({ type: Number })
  @Expose()
  situacao_pg: number;

  @ApiResponseProperty({ type: Number })
  @Expose()
  freqSms: number;

  @ApiResponseProperty({ type: String })
  @Expose()
  docSuspenso: string;

  @ApiResponseProperty({ type: Boolean })
  @Expose()
  alertnow: boolean;

  @ApiResponseProperty({ type: Date })
  @Expose()
  dt_criacao_now: Date;
  
  @ApiResponseProperty({ type: Boolean })
  @Expose()
  statusAtendimento: boolean;

  @ApiResponseProperty({ type: Boolean })
  @Expose()
  pause: boolean;
  
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
  solicitacao: number;

  constructor(partial: Partial<ClienteDiretoUnico>) {
    Object.assign(this, partial);
  }
}
