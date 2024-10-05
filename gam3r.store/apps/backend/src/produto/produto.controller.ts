import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
//import { resolve } from 'path';
//import { Produto, produtos } from 'src/core';
import { Produto } from '@evolution/core';
import { ProdutoPrisma } from './produto.prisma';

@Controller('produtos')
export class ProdutoController {

  constructor(readonly repo: ProdutoPrisma) {}

  @Post()
  async salvarProduto(@Body() produto: Produto): Promise<void> {
    return this.repo.salvar(produto);
  }

  @Get()
  async obterProdutos(): Promise<Produto[]> {
    return this.repo.obter();
  }

  @Get(':id')
  async obterProdutoPorId(@Param('id') id: string): Promise<Produto | null> {
    return this.repo.obterPorId(+id);
  }

  @Delete(':id')
  async excluirProduto(@Param('id') id: string): Promise<void> {
    return this.repo.excluir(+id);
  }

}

/*
@Get()
async obterProdutos(): Promise<Produto[]> {
  //await this.esperarSegundos(2);
  return produtos.map((produto) => ({
        ...produto,
        especificacoes: {destaque: produto.especificacoes.destaque},
}));
}
*/

/*
@Get(':id')
async obterProdutoPorId(@Param('id') id: string): Promise<Produto | null> {
  const produto = produtos.find((produto) => produto.id === +id);
  //return 'Deu Certo: ' + id;
  return produto ?? null;
}
*/

/*esperarSegundos(segundos: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, segundos * 1000);
  });
}*/