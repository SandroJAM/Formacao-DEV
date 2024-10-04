'use client'

import ProdutoItem from "@/src/components/produto/ProdutoItem"
import useProdutos from "@/src/data/hooks/useProdutos"

export default function Inicio() {
    const { produtos } = useProdutos()
    return (
        <div className="grid grid-cols-4 gap-5 container">
            {produtos.map((produto) => (
                <ProdutoItem key={produto.id} produto={produto} />
            ))}
        </div>
    )
}