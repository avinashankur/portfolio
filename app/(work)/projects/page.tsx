import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Link
        href="/"
        className="px-4 xl:px-[5rem] mt-[5rem] absolute font-bold text-purple-500 text-lg hover:text-neutral-400 transition"
      >
        &#60; Home
      </Link>

      <main className="px-4 xl:px-[5rem] pt-[10rem] min-h-screen">
        <h1 className="text-5xl lg:text-9xl tracking-wide font-anton uppercase text-neutral-400">
          Project
        </h1>

        <div className="lg:my-40 mx-auto my-16 shadow flex flex-wrap md:grid grid-flow-row grid-cols-3 w-fit gap-4">
          <Link
            href=""
            className="bg-neutral-800 h-[17rem] w-[15rem] lg:w-[20rem] rounded  border border-neutral-600 bg-[url('/monoma2.png')] bg-cover overflow-hidden group"
          >
            <div className="bg-neutral-950/70 lg:rotate-90 lg:translate-y-6 lg:-translate-x-[13.5rem] px-4 py-3 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-green-500 group-hover:-rotate-0 transition duration-500 h-full">
              <p className=" font-anton text-5xl lg:text-6xl">MONOMA</p>
              <p className="py-4">Marketing Website</p>
            </div>
          </Link>
          <Link
            href=""
            className="bg-neutral-800 h-[17rem] w-[15rem] lg:w-[20rem] rounded  border border-neutral-600 bg-[url('/ncs2.png')] bg-cover overflow-hidden group"
          >
            <div className="bg-neutral-950/70 h-full p-4 group-hover:bg-yellow-600 lg:translate-x-[13rem] lg:-translate-y-[1.5rem] transition duration-500 lg:-rotate-90 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0">
              <p className="font-medium uppercase mb-4 lg:text-6xl text-5xl font-anton tracking-4">
                NCS JSS
              </p>
              <p className="uppercase text-sm">
                With Next.js, Vercel, TailwindCSS
              </p>
            </div>
          </Link>
          <Link
            href=""
            className="bg-neutral-800 h-[20rem] md:h-[35rem] w-[15rem] lg:w-[20rem] rounded  border border-neutral-600 col-[2] row-[1/3] bg-[url('/harvey3.jpeg')] bg-cover flex flex-col justify-end overflow-hidden group"
          >
            <div className="bg-neutral-950/70 h-full p-4 lg:translate-y-[22rem] group-hover:bg-purple-600 group-hover:translate-y-0 transition duration-500">
              <p className="font-medium uppercase mb-4 lg:text-6xl text-5xl font-anton tracking-4">
                Harvey Bennet Portfolio
              </p>
              <p className="uppercase text-sm">
                With Next.js, Vercel, TailwindCSS
              </p>
            </div>
          </Link>
          <Link
            href=""
            className="bg-neutral-800 h-[17rem] w-[15rem] lg:w-[20rem] rounded  border border-neutral-600 bg-[url('/portfolio2.png')] bg-cover group overflow-hidden"
          >
            <div className="bg-pink-600 h-full p-4 group-hover:bg-neutral-950/70 group-hover:translate-y-[12rem] transition duration-500">
              <p className="font-medium uppercase mb-4 lg:text-6xl text-5xl font-anton tracking-4">
                Portfolio Website
              </p>
              <p className="uppercase text-sm">
                With Next.js, Vercel, TailwindCSS
              </p>
            </div>
          </Link>
          <Link
            href=""
            className="bg-neutral-800 h-[17rem] w-[15rem] lg:w-[20rem] rounded border border-neutral-600 group relative flex items-center justify-center"
          >
            <p className="font-anton text-3xl animate-bounce">Coming Soon</p>
          </Link>
        </div>
      </main>
    </>
  );
}
