import Image from "next/image";
import EventosContatosItens from "./EventosContatosItens/EventosContatosItens";

export default function EventosContato() {
    return (
      <div className="flex flex-col lg:flex-row gap-12 font-semibold text-black border-t-4 border-zinc-500 px-4 py-20 lg:p-20">
        <div className="flex items-center lg:items-start flex-col gap-7 font-semibold lg:w-1/4">
          <Image src="/logo.svg" alt="logo" width={100} height={10} />
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            harum aut sit inventore rem! Vitae nobis quia tenetur iste, maxime
            reprehenderit voluptatibus nisi corrupti reiciendis numquam nam.
            Odit, sunt at.
          </span>
        </div>
        <div id="Eventos" className="lg:w-1/4">
          <ul className="grid grid-cols-2 lg:grid-cols-1 justify-items-center  gap-11">
            <EventosContatosItens nome="Início" />
            <EventosContatosItens nome="Cursos" />
            <EventosContatosItens nome="Eventos" />
            <EventosContatosItens nome="Contato" />
          </ul>
        </div>
        <form
          id="Contatos"
          className="lg:w-2/4 flex flex-col gap-14 lg:justify-start lg:items-start"
        >
          <p className="font-black text-2xl">
            Receba materíais gratuitos no seu email
          </p>
          <input
            type="email"
            name="email"
            id=""
            className="w-full p-2 border-2 border-r-4 border-b-4 border-zinc-800  rounded-lg outline-none"
          />
          <button type="submit" className=" px-10 py-2 bg-orange-500 hover:bg-orange-700 rounded-lg font-black text-black shadow-[5px_5px] ">
            QUERO RECEBER
          </button>
        </form>
      </div>
    );
}