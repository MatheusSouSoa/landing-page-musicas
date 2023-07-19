import HeaderItems from "./header-menu/HeaderItems";
import Image from "next/image"

export default function Header() {
    return (
      <header>
        <div className="flex flex-col px-4 md:px-16 lg:px-20 md:flex-row justify-between items-center py-4 gap-2 border-b-4 border-zinc-500">
          <div className="flex justify-center font-black text-black text-2xl">
            <Image src="/logo.svg" alt="logo" width={100} height={10} />
          </div>
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center text-black text-lg">
              <HeaderItems nomeItem="Inicio" />
              <HeaderItems nomeItem="Cursos" />
              <HeaderItems nomeItem="Eventos" />
              <HeaderItems nomeItem="Contatos" />
            </ul>
          </div>
          <div className=" flex justify-center items-center ">
            <button className=" px-3 py-1 text-2xl md:text-base bg-orange-500 hover:bg-orange-700 rounded-md font-black text-black border border-r-4 border-b-4 border-black hover:border-r-2 hover:border-b-2 ">
              {" "}
              Se increva
            </button>
          </div>
        </div>
      </header>
    );
}