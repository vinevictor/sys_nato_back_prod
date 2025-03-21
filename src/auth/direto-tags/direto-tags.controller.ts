import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DiretoTagsService } from './direto-tags.service';
import { CreateDiretoTagDto } from './dto/create-direto-tag.dto';
import { AuthGuard } from '../auth.guard';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { DiretoTag } from './entities/direto-tag.entity';
import { ErrorDiretoTagsType } from './entities/error.tag.entity';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('direto-tags')
export class DiretoTagsController {
  constructor(private readonly diretoTagsService: DiretoTagsService) {}

  @ApiResponse({
    status: 201,
    description: 'A tag foi criada com sucesso',
    type: DiretoTag
  })
  @ApiResponse({
    status: 200,
    description: 'A tag foi atualizada com sucesso',
    type: DiretoTag
  })
  @ApiResponse({
    status: 400,
    description: 'A tag nao foi criada ou atualizada',
    type: ErrorDiretoTagsType
  })
  @Post('/:idsolicitacao')
  async create(@Body() createDiretoTagDto: CreateDiretoTagDto, @Param('idsolicitacao') idsolicitacao: string) {
    return await this.diretoTagsService.create(+idsolicitacao, createDiretoTagDto);
  }

  @ApiResponse({
    status: 200,
    description: 'As tags foram buscadas com sucesso',
    type: DiretoTag
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao buscar tags',
    type: ErrorDiretoTagsType
  })
  @Get()
  async findAll() {
    return await this.diretoTagsService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'A tag foi buscada com sucesso',
    type: DiretoTag
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao buscar tag',
    type: ErrorDiretoTagsType
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.diretoTagsService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'A tag foi deletada com sucesso',
    type: DiretoTag
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao deletar tag',
    type: ErrorDiretoTagsType
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.diretoTagsService.remove(+id);
  }
}
