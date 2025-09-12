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
        </div>
      </div>
      <div></div>
    </main>
  );
}
