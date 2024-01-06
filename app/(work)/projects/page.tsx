import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Link
        href="/"
        className="px-4 xl:px-[5rem] mt-[5rem] absolute font-bold text-sky-400 text-lg hover:text-neutral-400 transition"
      >
        &#60; Home
      </Link>

      <main className="px-4 xl:px-[5rem] pt-[10rem]">
        <h1 className="text-5xl lg:text-9xl font-bold tracking-wide font-[fantasy] uppercase">
          Projects
        </h1>
        <div className="min-h-screen">
          <div className="flex mt-10 gap-4">
            <Image
              src="/insta.png"
              alt="insta"
              width={900}
              height={1000}
              className=""
            />
            <div className="">
              <Image
                src="/insta.png"
                alt="insta"
                width={500}
                height={100}
                className=""
              />
              <div className="p-4 mt-3 rounded">
                <h2 className="mt-3 tracking-wide text-2xl font-[fantasy] uppercase">
                  Project 1
                </h2>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  provident obcaecati voluptatibus? Libero illum, aliquam
                  dolores ipsam omnis eveniet quaerat?
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
