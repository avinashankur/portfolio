import HomeButt from "@/components/HomeButt";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

export default function Instagram() {
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
          Instagram
        </h1>
        <div className="mt-10 max-w-3xl">
          <h2 className="font-medium">Welcome to My Instagram World !</h2>
          <p className="text-neutral-400">
            Step into a realm of mesmerizing anime content, where creativity and
            technology converge to elevate your visual experience. On my
            Instagram page, I wield the power of AI upscaling to breathe new
            life into anime. making them even crisper and higher in quality.
            Witness your favorite characters and scenes transformed into
            stunning masterpieces that leave you awestruck. My journey on
            Instagram has been nothing short of extraordinary, marked by
            milestones like 15k+ views and multiple 1k+ likes on my reels. Join
            my ever-growing community of anime aficionados and indulge in a
            feast of captivating content.{" "}
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="https://instagram.com/avixnsh"
            target="_blank"
            className="flex items-center gap-3 underline uppercase font-medium"
          >
            <BsInstagram className="text-2xl text-red-400 " />
            Follow me on Instagram
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
