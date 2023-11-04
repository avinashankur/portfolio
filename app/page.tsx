import Link from "next/link";

export default function Home() {
  return (
    <main className="px-8 xl:px-[15rem]">
      <div className="pt-20 uppercase text-5xl lg:text-[8rem] font-bold tracking-tighter">
        <h1 className="overflow-hidden relative">
          Hi, i&#39;m <span id="logo" className="text-sky-400">Avinash</span>
          <span>.</span>
        </h1>
      </div>

      <section className="max-w-3xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 my-24 ">
          <h1 className="font-bold tracking-tighter uppercase text-lg">
            Graphic Designer
          </h1>
          <p className="text-neutral-400 text-sm lg:text-base">
            My name is Arnav Gupta AKA Infraxer. I am a creative and passionate
            graphic designer who is eager to learn and grow. By pushing the
            boundaries of design, I love bringing innovative ideas to life
            through visual storytelling.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <h1 className="font-bold tracking-tighter uppercase text-lg underline">
            My portfolio
          </h1>
          <div>
            <Link href="/" className=" flex items-start">
              <span className="text-sm text-neutral-400 font-normal">01 </span>
              <span className="text-5xl lg:text-8xl font-bold text-sky-400 uppercase tracking-[-0.2rem] lg:tracking-[-0.5rem] hover:text-sky-700 transition">
                behance
              </span>
            </Link>
            <Link href="/" className=" flex items-start">
              <span className="text-sm text-neutral-400 font-normal">02 </span>
              <span className="text-5xl lg:text-8xl font-bold text-sky-400 uppercase tracking-[-0.2rem] lg:tracking-[-0.5rem] hover:text-sky-700 transition">
                Linkedin
              </span>
            </Link>
            <Link href="/instagram" className=" flex items-start">
              <span className="text-sm text-neutral-400 font-normal">03 </span>
              <span className="text-5xl lg:text-8xl font-bold text-sky-400 uppercase tracking-[-0.2rem] lg:tracking-[-0.5rem] hover:text-sky-700 transition">
                Instagram
              </span>
            </Link>
            <Link href="/" className=" flex items-start">
              <span className="text-sm text-neutral-400 font-normal">04 </span>
              <span className="text-5xl lg:text-8xl font-bold text-sky-400 uppercase tracking-[-0.2rem] lg:tracking-[-0.5rem] hover:text-sky-700 transition">
                Skills
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
