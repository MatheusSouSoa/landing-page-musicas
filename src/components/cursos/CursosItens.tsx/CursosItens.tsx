import Image from "next/image";

interface CursosItensProps {
    titulo: string
    img: string
    isOrange?: boolean
}

export default function CursosItens (props: CursosItensProps) {
    return (
      <div
        className={`flex flex-col bg-orange-600 p-5 rounded-md shadow-[5px_5px_4px_rgba(0,0,0,1)] ${
          props.isOrange ? "bg-orange-700 xl:mb-10" : "bg-orange-400 xl:mt-10"
        }`}
      >
        <div className="flex justify-start">
          <Image src={props.img} alt={props.titulo} width={50} height={100} />
        </div>
        <div className="font-black text-black">{props.titulo}</div>
        <div className="text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          neque cumque molestias. Eum consequuntur eveniet explicabo dolorum
          suscipit corporis recusandae, quibusdam deserunt id, voluptatibus
          corrupti mollitia soluta. Magnam, perferendis ducimus?
        </div>
        <div className="flex justify-end">
          <a href="#">
            <Image
              src="/arrow-right.svg"
              alt="arrow right"
              width={70}
              height={10}
            />
          </a>
        </div>
      </div>
    );
}