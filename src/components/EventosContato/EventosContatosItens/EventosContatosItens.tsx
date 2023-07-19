interface EventosContatosItensProps {
    nome: string
}

export default function EventosContatosItens(props: EventosContatosItensProps) {
    return (
        <li className="hover:underline cursor-pointer text-center">
            {props.nome}
        </li>
    )
}