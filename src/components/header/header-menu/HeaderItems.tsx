interface HeaderItemsProps{
    nomeItem: string
}


export default function HeaderItems(props: HeaderItemsProps) {

    return (
        
        <li className=" hover:underline">
            <a href={`#${props.nomeItem}`}>
                {props.nomeItem}
            </a>
        </li>
  
    )

}