import { Injectable } from '@nestjs/common';
import { Produto } from '@prisma/client';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {

    // Injeção de dependência.
    constructor(readonly prisma: PrismaProvider) { }

    async salvar(produto: Produto): Promise<void>{
        await this.prisma.produto.create({data: produto});
        // await this.prisma.produto.upsert({where: {id: produto.id ?? -1}, update: produto, create: produto});
    }

    async obter(): Promise<Produto[]> {
        return this.prisma.produto.findMany({
            // select: {id: true, nome: true, precoPromocional: true}
        }) as any;
    }

    async obterPorId(id: number): Promise<Produto | null> {
        const produto = await this.prisma.produto.findUnique({ where: { id } })
        return (produto as any) ?? null;
    }

    async excluir(id: number): Promise<void> {
        await this.prisma.produto.delete({where: { id }});
    }

}
