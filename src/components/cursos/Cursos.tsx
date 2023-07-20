import CursosItens from "./CursosItens.tsx/CursosItens";

export default function Cursos() {
    return (
      <section id="Cursos" className="p-2 pb-20 md:p-20">
        <div className="grid xl:grid-cols-4 gap-5 mt-10">
          <CursosItens img="/piano.png" titulo="Piano popular" isOrange />
          <CursosItens img="/clef.png" titulo="Teoria musical" />
          <CursosItens img="/sax.png" titulo="Sax alto" isOrange />
          <CursosItens img="/drums.png" titulo="Bateria" />
        </div>
        <div className="flex flex-col gap-40 justify-center items-center text-center pt-36 lg:p-40 xl:p-52 font-black text-black">
          <div className="text-4xl xl:text-6xl">
            E <span className="text-orange-600"> vários</span> outros!
          </div>
          <div className="w-full h-full">
            <button className=" px-10 py-4 bg-orange-500 hover:bg-orange-700 rounded-md font-black text-black shadow-[5px_5px] ">
              CONHECER CURSOS
            </button>
          </div>
        </div>
      </section>
    );
}