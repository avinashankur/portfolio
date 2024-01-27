import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Link
        href="/"
        className="px-4 xl:px-[5rem] mt-[5rem] absolute font-bold text-purple-400 text-lg hover:text-neutral-400 transition"
      >
        &#60; Home
      </Link>

      <main className="px-4 xl:px-[5rem] pt-[10rem] min-h-screen">
        <h1 className="text-5xl lg:text-9xl tracking-wide font-anton uppercase text-neutral-400">
          Projects
        </h1>
        <div className="uppercase text-5xl md:text-6xl flex flex-col my-24">
          <Link href="https://harvey-bennet.vercel.app/" target="_blank" className="border-b-2 border-t-2 py-6 font-anton tracking-wider px-4">Harvey Bennet</Link>
          <Link href="https://monoma-gamma.vercel.app/" target="_blank" className="border-b-2 py-6 font-anton tracking-wider px-4">Monoma</Link>
          <Link href="https://nibble-phi.vercel.app/" target="_blank" className="border-b-2 py-6 font-anton tracking-wider px-4">NCS JSS</Link>
          {/* <Link href="https://syndicate-school.vercel.app/" target="_blank" className="border-b-2 py-6 font-anton tracking-wider px-4">Syndicate</Link> */}
        </div>
      </main>
    </>
  );
}
