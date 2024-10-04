import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProdutoModule } from './produto/produto.module';
import { ProdutoController } from './produto/produto.controller';
import { DbModule } from './db/db.module';
import { ProdutoPrisma } from './produto/produto.prisma';

@Module({
  imports: [ProdutoModule, DbModule],
  controllers: [AppController, ProdutoController],
  providers: [ProdutoPrisma],
})
export class AppModule {

}
