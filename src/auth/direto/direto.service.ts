import { HttpException, Injectable } from '@nestjs/common';
import { UpdateDiretoDto } from './dto/update-direto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { plainToClass } from 'class-transformer';
import { ClienteDireto } from './entities/cliente.direto.entity';
import { ErrorClienteDiretoType } from './entities/error.cliente.entity';
import { ClienteDiretoUnico } from './entities/cliente.direto.unico.entity';

@Injectable()
export class DiretoService {
    constructor(private prismaService: PrismaService) {}

  async findAll() {
    try {
      const request =
      await this.prismaService.nato_direto_solicitacoes.findMany({
        orderBy: {
          dt_solicitacao: 'desc',
        },
      });
      console.log("🚀 ~ DiretoService ~ findAll ~ request:", request)
      if (!request) {
        const retorno: ErrorClienteDiretoType = {
          message: 'Erro ao buscar Clientes',
        };
        throw new HttpException(retorno, 400);
      }
      return request.map((item) => plainToClass(ClienteDireto, item, {excludeExtraneousValues: true}));
    } catch (error) {
      console.log(error);
      const retorno: ErrorClienteDiretoType = {
        message: error.message ? error.message : 'ERRO DESCONHECIDO',
      };
      throw new HttpException(retorno, 400);
    }finally{
      await this.prismaService.$disconnect()
    }
  }

  async findOne(id: number) {
    try {
      const request =
        await this.prismaService.nato_direto_solicitacoes.findUnique({
          where: {
            id: id,
          },
        });
      if (!request) {
        const retorno: ErrorClienteDiretoType = {
          message: 'Erro ao buscar Cliente',
        };
        throw new HttpException(retorno, 400);
      }
      return plainToClass(ClienteDiretoUnico, request, {excludeExtraneousValues: true});
    } catch (error) {
      console.log(error);
      const retorno: ErrorClienteDiretoType = {
        message: error.message ? error.message : 'ERRO DESCONHECIDO',
      };
      throw new HttpException(retorno, 400);
    }finally{
      await this.prismaService.$disconnect()
    }
  }

  async update(id: number, updateDiretoDto: UpdateDiretoDto) {
    try {
      const request = await this.prismaService.nato_direto_solicitacoes.update({
        where: {
          id: id,
        },
        data: updateDiretoDto,
      });
      if (!request) {
        const retorno: ErrorClienteDiretoType = {
          message: 'Erro ao atualizar Cliente',
        };
        throw new HttpException(retorno, 400);
      }
      return plainToClass(ClienteDiretoUnico, request, {excludeExtraneousValues: true});
    } catch (error) { 
      console.log(error);
      const retorno: ErrorClienteDiretoType = {
        message: error.message ? error.message : 'ERRO DESCONHECIDO',
      };
      throw new HttpException(retorno, 400);
    }finally{
      await this.prismaService.$disconnect()
    }
  }

  async remove(id: number) {
    try{
      const request = await this.prismaService.nato_direto_solicitacoes.update({
        where: {
          id: id,
        },
        data: {
          ativo: false,
        },
      });
      if (!request) {
        const retorno: ErrorClienteDiretoType = {
          message: 'Erro ao desativar Cliente',
        };
        throw new HttpException(retorno, 400);
      }
      return plainToClass(ClienteDireto, request, {excludeExtraneousValues: true});
    }catch (error) {
      console.log(error);
      const retorno: ErrorClienteDiretoType = {
        message: error.message ? error.message : 'ERRO DESCONHECIDO',
      };
      throw new HttpException(retorno, 400);
    }finally{
      await this.prismaService.$disconnect()
    }
  }
}
