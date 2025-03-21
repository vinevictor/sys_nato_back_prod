import { HttpException, Injectable } from '@nestjs/common';
import { CreateDiretoTagDto } from './dto/create-direto-tag.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { DiretoTag } from './entities/direto-tag.entity';
import { ErrorDiretoTagsType } from './entities/error.tag.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class DiretoTagsService {
  constructor(private prismaService: PrismaService) {}
  async create( idsolicitacao: number,createDiretoTagDto: CreateDiretoTagDto) {
    try{
      const Exist : DiretoTag = await this.prismaService.nato_direto_tags.findUnique({
        where: {
          solicitacao: idsolicitacao
        }
      })
      if (Exist){
        const req = await this.prismaService.nato_direto_tags.update({
          where: {
            id: Exist.id
          },
          data: {
            ...createDiretoTagDto
          }
        })
        }
      
        const req = await this.prismaService.nato_direto_tags.create({
          data: {
            ...createDiretoTagDto,
            solicitacao: idsolicitacao
          }
        })
        if (!req) {
                  const retorno: ErrorDiretoTagsType = {
                    message: 'Erro ao buscar Cliente',
                  };
                  throw new HttpException(retorno, 400);
                }
        return plainToClass(DiretoTag, req);
    }catch (error) {
      console.log(error);
      const retorno: ErrorDiretoTagsType = {
        message: error.message ? error.message : 'ERRO DESCONHECIDO',
      };
      throw new HttpException(retorno, 400);
    }finally{
      await this.prismaService.$disconnect()
    }
  }

  async findAll() {
    try {
      const req = await this.prismaService.nato_direto_tags.findMany();
      if (!req) {
        const retorno: ErrorDiretoTagsType = {
          message: 'Erro ao buscar Clientes',
        };
        throw new HttpException(retorno, 400);
      }
      return req.map((item) => plainToClass(DiretoTag, item));
    } catch (error) {
      console.log(error.message);
      const retorno: ErrorDiretoTagsType = {
        message: error.message ? error.message : 'ERRO DESCONHECIDO',
      };
    }finally{
      await this.prismaService.$disconnect()
    }
  }

  async findOne(id: number) {
    try{
      const req = await this.prismaService.nato_direto_tags.findUnique({
        where: {
          id: id
        }
      })
      if (!req) {
        const retorno: ErrorDiretoTagsType = {
          message: 'Erro ao buscar Cliente',
        };
        throw new HttpException(retorno, 400);
      }
      return plainToClass(DiretoTag, req);
    }catch (error) {
      console.log(error);
      const retorno: ErrorDiretoTagsType = {
        message: error.message ? error.message : 'ERRO DESCONHECIDO',
      };
      throw new HttpException(retorno, 400);
    }finally{
      await this.prismaService.$disconnect()
    }
  }

  async remove(id: number) {
    try{
      const req = await this.prismaService.nato_direto_tags.delete({
        where: {
          id: id
        }
      })
      if (!req) {
        const retorno: ErrorDiretoTagsType = {
          message: 'Erro ao buscar Cliente',
        };
        throw new HttpException(retorno, 400);
      }
      return plainToClass(DiretoTag, req);
    }catch (error) {
      console.log(error);
      const retorno: ErrorDiretoTagsType = {
        message: error.message ? error.message : 'ERRO DESCONHECIDO',
      };
      throw new HttpException(retorno, 400);
    }finally{
      await this.prismaService.$disconnect()
    }
  }
}
