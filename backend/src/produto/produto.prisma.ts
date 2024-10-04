import { Injectable } from '@nestjs/common';
import { Produto } from '@prisma/client';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {
    
    // Injeção de dependência.
    constructor(readonly prisma: PrismaProvider) {}

        async obter(): Promise<Produto[]> {
            return this.prisma.produto.findMany() as any;
        }

        async obterPorId(id: number): Promise<Produto | null> {
            const produto = await this.prisma.produto.findUnique({ where: {id} })
            return (produto as any) ?? null;
        }

}
