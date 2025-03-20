import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DiretoService } from './direto.service';
import { CreateDiretoDto } from './dto/create-direto.dto';
import { UpdateDiretoDto } from './dto/update-direto.dto';
import { AuthGuard } from '../auth.guard';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { ErrorClienteDiretoType } from './entities/error.cliente.entity';
import { ClienteDireto } from './entities/cliente.direto.entity';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('direto')
export class DiretoController {
  constructor(private readonly diretoService: DiretoService) {}
  
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de Clientes diretos',
    type: [ClienteDireto],
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao Buscar Clientes',
    type: ErrorClienteDiretoType
  })
  @Get()
  async findAll() {
    return await this.diretoService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'Retorna um Cliente direto',
    type: ClienteDireto
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao Buscar Cliente',
    type: ErrorClienteDiretoType
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.diretoService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'Cliente Atualizado com sucesso',
    type: ClienteDireto
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao Atualizar Cliente',
    type: ErrorClienteDiretoType
  })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDiretoDto: UpdateDiretoDto) {
    return await this.diretoService.update(+id, updateDiretoDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Cliente Desativado com sucesso',
    type: ClienteDireto
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao Desativar Cliente',
    type: ErrorClienteDiretoType
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.diretoService.remove(+id);
  }
}
