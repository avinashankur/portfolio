import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 lg:px-[15rem] px-4 pt-[3rem] pb-[1rem] ">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between x">
        <div className="flex flex-col">
          <Link href="/" className="uppercase font-anton text-2xl">
            Avinash
          </Link>
          <Link href="mailto:avinashhankur@gmail.com" className="underline font-bold text-sm text-neutral-400 tracking-tighter hover:text-neutral-200 transition">avinashhankur@gmail.com</Link>
        </div>
        <div className="font-medium uppercase  tracking-tight gap-3 flex flex-col lg:flex-row text-neutral-400">
          <Link href="/projects" className="hover:text-sky-400 transition">
            • Projects
          </Link>
          <Link href="https://github.com/avinashankur" target="_blank" className="hover:text-sky-400 transition">
            • Github
          </Link>
          <Link
            href="https://linkedin.com/in/avinashankur"
            target="_blank"
            className="hover:text-sky-400 transition"
          >
            • LinkedIn
          </Link>
          <Link
            href="https://instagram.com/avixnsh"
            target="_blank"
            className="hover:text-sky-400 transition"
          >
            • Instagram
          </Link>
        </div>
      </div>
      <div className="mt-24 text-neutral-500 font-aron uppercase font-bold text-xs">
        <p className="text-center ">Made with 🩵 by Avinash.</p>
      </div>
    </footer>
  );
};

export default Footer;
