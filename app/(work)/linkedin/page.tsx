import Link from "next/link";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";

export default function Linkedin() {
  return (
    <>
      <Link
        href="/"
        className="px-4 xl:px-[15rem] mt-[5rem] absolute font-bold text-sky-400 text-lg hover:text-neutral-400 transition"
      >
        &#60; Home
      </Link>

      <main className="px-4 xl:px-[15rem] pt-[10rem]">
        <h1 className="text-5xl lg:text-9xl font-bold tracking-tighter uppercase">
          LinkedIn
        </h1>
        <div className="mt-10 max-w-3xl">
          <h2 className="font-medium">Welcome to My LinkedIn!</h2>
          <p className="text-neutral-400">
          Are you looking to expand your network and explore exciting opportunities in the world of graphic design? Let&apos;s connect on LinkedIn! As a passionate and accomplished graphic designer, I curate captivating visual experiences that leave a lasting impression. Join me on this creative journey, where we can exchange ideas, collaborate on innovative projects, and together, make a meaningful impact through the power of design. Click the link below to visit my LinkedIn profile, and let&apos;s embark on this inspiring adventure together. Looking forward to connecting with you!
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="https://instagram.com/avixnsh"
            target="_blank"
            className="flex items-center gap-3 underline uppercase font-medium"
          >
            <BsInstagram className="text-2xl text-red-400 " />
            Let&apos;s connect on LinkedIn
          </Link>
        </div>

        <div className="my-8 flex flex-col gap-4">
          <Image src="/insta.png" height={400} width={1200} alt="insta" />
          <Image src="/insta.png" height={400} width={1200} alt="insta" />
          <Image src="/insta.png" height={400} width={1200} alt="insta" />
        </div>
      </main>
    </>
  );
}
