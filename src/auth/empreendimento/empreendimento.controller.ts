import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth.guard';
import { EmpreendimentoService } from './empreendimento.service';
import { EmpreendimentoPresenter } from './empreendimento.presenter';
import { CreateEmpreendimentoDto } from './dto/create-empreendimento.dto';
import { UpdateEmpreendimentoDto } from './dto/update-empreendimento.dto';

@UseGuards(AuthGuard)
  @Controller('empreendimento')
export class EmpreendimentoController {
  constructor(private empreendimentoService: EmpreendimentoService) {}

  @Get('/')
  async GetAll(@Req() req: any) {
    try {
      const Financeira = req.user.Financeira
      const Hierarquia = req.user.hierarquia
      const Construtora = req.user.construtora

      return await this.empreendimentoService.GetAll(Financeira, Hierarquia, Construtora);
    } catch (error) {
      return error;
    }
  }

  @Get('/search')
  async GetAllSearch(@Req() req: any, @Query() query: any) {
    try {
      const {financeiro, construtora} = query
      return await this.empreendimentoService.GetAllBusca(financeiro, construtora);
    } catch (error) {
      return error;
    }
  }   



  @Get('/:id')
  async GetOne(@Param('id', new ParseIntPipe()) id: number) {
    const req = await this.empreendimentoService.GetOne(id);
    return new EmpreendimentoPresenter(req);
  }

  @Post('/')
  async Create(@Body() CreateEmpreendimentoDto: CreateEmpreendimentoDto) {
    const req = await this.empreendimentoService.Create(CreateEmpreendimentoDto);
    return req;
  }

  @Put('/:id')
  async Update(@Param('id') id: number, @Body() UpdateEmpreendimentoDto: UpdateEmpreendimentoDto) {
    const req = await this.empreendimentoService.Update(id, UpdateEmpreendimentoDto);
    return new EmpreendimentoPresenter(req);
  }

  @Delete('/delete/:id')
  async Delete(@Param('id', new ParseIntPipe()) id: number) {
    return this.empreendimentoService.Delete(id);
  }

  @Get('/filter/:id')
  async Filter(@Param('id') id: number) {
    const req = await this.empreendimentoService.Filter(id);
    return req.map((data: any) => new EmpreendimentoPresenter(data));
  }

}
