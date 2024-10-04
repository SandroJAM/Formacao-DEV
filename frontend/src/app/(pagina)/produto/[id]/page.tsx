'use client'
import { Produto } from "@/src/core"
//import Pagina from "@/src/components/template/Pagina"
//import { produtos } from "@/src/core"
import useProduto from "@/src/data/hooks/useProdutos"
import { useEffect, useState } from "react"

export default function PaginaProduto(props: any){
    const { obterProdutoPorId } = useProduto()
    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {
        obterProdutoPorId(+props.params.id).then(setProduto)
    }, [props.params.id])

    //const id = +props.params.id
    //const produto = produtos.find(p => p.id === id)
    return (
        produto ? (<div>{produto?.nome}</div>) : <div>Produto não encontrado!</div>
    )
    
}