import Image from "next/image";
import { ThemeProvider, Button } from "@material-tailwind/react";
export default function Home() {
  return (
    <main>
      <div className="w-full h-auto mt-20 pl-4 pr-4 flex items-center flex-col">
        <div className="text-center font-bold font-[<Loos Wide>] text-4xl text-white">
          The easiest way to start a DAO
        </div>
        <div className="text-center font-medium text-2xl text-white">
          An all-in-one platform to start, manage and grow a decentralized
          autonomous organization
        </div>
        <div className="h-auto pt-10">
          <button className="w-36.25 h-11.25 bg-[#FFCF01] font-bold rounded-2xl cursor-pointer shadow-[0_7px_36px_0_rgba(255,207,1,0.2)]">
            Get started
          </button>
          <Image
            src="/More.svg"
            alt="Больше"
            width={20.5}
            height={21}
            className="object-contain cursor-pointer hidden"
          />
        </div>
      </div>
      <div></div>
      <Image
        src="/Stars.svg"
        alt=""
        width={38}
        height={38.51}
        className="mt-20 ml-18.5 absolute"
      />
      <h1 className="text-white font-bold mt-[106px]! ml-4 mr-4 w-full text-4xl text-center">
        Ready <p></p> for every project
      </h1>
      <div className="w-full flex flex-wrap gap-3 justify-center">
        <button className="bg-[#182632] px-[12px] py-[14px] rounded-[45px] text-[14px] text-[#FFB4D3] w-fit">
          Investment DAO
        </button>
        <button className="bg-[#182632] px-[12px] py-[14px] rounded-[45px] text-[14px] text-[#FFC24C] w-fit">
          Startup DAO
        </button>
        <button className="bg-[#182632] px-[12px] py-[14px] rounded-[45px] text-[14px] text-[#D387F7] w-fit">
          Service DAO
        </button>
        <button className="bg-[#182632] px-[12px] py-[14px] rounded-[45px] text-[14px] text-[#77E6FF] w-fit">
          Community DAO
        </button>
        <button className="bg-[#182632] px-[12px] py-[14px] rounded-[45px] text-[14px] text-[#23C9DE] w-fit">
          Impact DAO
        </button>
        <button className="bg-[#182632] px-[12px] py-[14px] rounded-[45px] text-[14px] text-[#FFB4D3] w-fit">
          DeFi DAO
        </button>
        <button className="bg-[#182632] px-[12px] py-[14px] rounded-[45px] flex text-[14px] text-[#707F8D] w-fit">
          <Image
            src="/Star.svg"
            alt=""
            width={10}
            height={10}
            className="mr-[3px]"
          />
          More
        </button>
      </div>
    </main>
  );
}
