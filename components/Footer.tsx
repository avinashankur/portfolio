import Link from "next/link";

const Footer = () => {
    return <footer className="bg-zinc-950 flex flex-col lg:flex-row lg:items-center gap-4 justify-between xl:px-[15rem] px-4 pt-[3rem] pb-[10rem]">
        <div className="flex flex-col">
            <Link href="/" className="uppercase font-[fantasy] text-2xl">Avinash</Link>
            {/* <Link href="/" className="underline font-bold uppercase text-sky-400 tracking-tighter hover:text-neutral-200 transition">Resume</Link> */}
        </div>
        <div className="underline font-medium text-xl tracking-tight gap-3 flex flex-col lg:flex-row">
            <Link href="/" className="hover:text-sky-400 transition">Behance</Link>
            <Link href="/" className="hover:text-sky-400 transition">LinkedIn</Link>
            <Link href="/" className="hover:text-sky-400 transition">Instagram</Link>
            <Link href="/" className="hover:text-sky-400 transition">YouTube</Link>
        </div>
    </footer>
}

export default Footer;

