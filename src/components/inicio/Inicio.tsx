
import Image from "next/image"

export default function Inicio(){

    return (
      <section
        id="Inicio"
        className="flex pl-4 pb-[100px] gap-16 xl:flex-row flex-col md:ml-10 "
      >
        <div className=" xl:w-2/5 flex flex-col md:pl-10 pt-10 gap-10 ">
          <div className="font-black flex items-center xl:items-start flex-col text-4xl md:text-6xl gap-5">
            <span className="text-black">Crie algo</span>
            <div className="text-orange-500 flex">
              impactante
              <Image src="three-dashes.svg" width={20} height={20} alt="" />
            </div>
            <span className="text-black">com musica</span>
          </div>
          <div className="text-black text-2xl md:text-xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            incidunt autem dolorum enim animi eum. Facilis autem cupiditate ea
            iusto sapiente corrupti voluptate! Ut fuga eligendi quidem.
            Molestias, odit cumque!
          </div>
          <div className="grid justify-items-center">
            {/* estudar depois relative/absolute e translate/transform */}
            <button className="relative rounded-md px-10 py-4 bg-orange-500 hover:bg-orange-700  font-black text-black shadow-[5px_5px_5px_rgba(0,0,0,1)] ">
              COMECE
              <Image
                className="absolute translate-y-[calc(100%+20px)] translate-x-1/2 bottom-0 right-0 pointer-events-none"
                src="arrow-curve.svg"
                width={120} //150
                height={100}
                alt="arrow curve"
              />
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end mt-4">
          <Image src="hero-img.svg" width={900} height={100} alt="hero-img" />
        </div>
      </section>
    );
    //900 - 100
}