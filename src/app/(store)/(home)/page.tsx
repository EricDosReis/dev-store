import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-150"
          src="/moletom-ai-side.png"
          height={900}
          width={900}
          alt="Moletom AI Side"
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-width[288px] rounded-full border-2 border-zinc-500  bg-black/60 p-1 pl-5">
          <span className="text-small truncate">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-150"
          src="/moletom-java.png"
          height={900}
          width={900}
          alt="Moletom Java"
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-width[288px] rounded-full border-2 border-zinc-500  bg-black/60 p-1 pl-5">
          <span className="text-small truncate">Moletom Java</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$179
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-150"
          src="/moletom-never-stop-learning.png"
          height={900}
          width={900}
          alt="Moletom Never Stop Learning"
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-width[288px] rounded-full border-2 border-zinc-500  bg-black/60 p-1 pl-5">
          <span className="text-small truncate">
            Moletom Never Stop Learning
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$159
          </span>
        </div>
      </Link>
    </div>
  );
}
