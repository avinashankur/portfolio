import Link from "next/link";

export default function Home() {
  return (
    <main className="px-8 xl:px-[15rem]">
      <div className="mt-20 uppercase text-6xl lg:text-[8rem] tracking-wide leading-[4.2rem] md:leading-normal font-anton">
        <h1 className="overflow-hidden relative">
          Hi, i&#39;m <span id="logo" className="text-sky-400">Avinash</span>
          <span>.</span>
        </h1>
      </div>

      <section className="max-w-3xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 lg:my-24 my-14 ">
          <h1 className="font-bold tracking-tighter uppercase text-lg">
            WebDev
          </h1>
          <p className="text-neutral-400 text-sm lg:text-base">
          Hey Avinash! I&apos;m a web enthusiast, crafting cool stuff with code. Love exploring design and bringing wild ideas to life on the web. Let&apos;s add a touch of magic to the internet, one code line at a time! 🚀
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <h1 className="font-bold tracking-tighter uppercase text-lg underline">
            My portfolio
          </h1>
          <div className="tracking-wide font-anton">
            <Link href="/projects" className=" flex items-start">
              <span className="text-sm text-neutral-400 font-normal">01 </span>
              <span className="text-5xl lg:text-8xl text-sky-400 uppercase hover:text-sky-700 transition">
                Projects
              </span>
            </Link>
            <Link href="/" className=" flex items-start">
              <span className="text-sm text-neutral-400 font-normal">02 </span>
              <span className="text-5xl lg:text-8xl text-sky-400 uppercase hover:text-sky-700 transition">
                Skills
              </span>
            </Link>
            <Link href="https://linkedin.com/in/avinashankur" target="_blank" className=" flex items-start">
              <span className="text-sm text-neutral-400 font-normal">03 </span>
              <span className="text-5xl lg:text-8xl text-sky-400 uppercase hover:text-sky-700 transition">
                LinkedIn
              </span>
            </Link>
            <Link href="https://instagram.com/avixnsh" target="_blank" className=" flex items-start">
              <span className="text-sm text-neutral-400 font-normal">04 </span>
              <span className="text-5xl lg:text-8xl text-sky-400 uppercase hover:text-sky-700 transition">
                Instagram
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
