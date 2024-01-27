import Link from "next/link";

export default function Home() {
  return (
    <main className="px-8 xl:px-[15rem]">
      <div className="mt-20 uppercase text-6xl lg:text-[8rem] tracking-wide leading-[4.2rem] md:leading-normal font-anton">
        <h1 className="overflow-hidden relative anim-rl">
          Hi, i&#39;m <span id="logo" className="text-purple-400">Avinash</span>
          <span>.</span>
        </h1>
      </div>

      <section className="max-w-3xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 lg:my-24 my-14 ">
          <h1 className="font-bold tracking-tighter uppercase text-lg">
            WebDev
          </h1>
          <p className="text-neutral-400 text-sm lg:text-base">
          I&apos;m a computer science student based in Noida. Developing and maintaining web apps using Next.js. 😎
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <h1 className="font-bold tracking-tighter uppercase text-lg underline">
            My portfolio
          </h1>
          <div className="tracking-wide font-anton">
            <Link href="/projects" id="harvey" className="flex items-start">
              <span className="text-sm text-neutral-400 font-normal anim-op">01 </span>
              <span className="text-5xl lg:text-8xl text-purple-400 uppercase hover:text-purple-700 transition anim-rl">
                Projects
              </span>
            </Link>
            <Link href="/skills" className=" flex items-start">
              <span className="text-sm text-neutral-400 font-normal anim-op">02 </span>
              <span className="text-5xl lg:text-8xl text-purple-400 uppercase hover:text-purple-700 transition anim-lr">
                Skills
              </span>
            </Link>
            <Link href="https://linkedin.com/in/avinashankur" target="_blank" className=" flex items-start">
              <span className="text-sm text-neutral-400 font-normal anim-op">03 </span>
              <span className="text-5xl lg:text-8xl text-purple-400 uppercase hover:text-purple-700 transition anim-rl">
                LinkedIn
              </span>
            </Link>
            <Link href="https://instagram.com/avixnsh" target="_blank" className=" flex items-start">
              <span className="text-sm text-neutral-400 font-normal anim-op">04 </span>
              <span className="text-5xl lg:text-8xl text-purple-400 uppercase hover:text-purple-700 transition anim-lr">
                Instagram
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
