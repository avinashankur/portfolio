import Link from "next/link";

export default function Skills() {
  return (
    <>
      <Link
        href="/"
        className="px-4 xl:px-[5rem] mt-[5rem] absolute font-bold text-sky-400 text-lg hover:text-neutral-400 transition"
      >
        &#60; Home
      </Link>

      <main className="px-4 xl:px-[5rem] pt-[10rem] min-h-screen">
        <h1>Skills? Baigan. 🙃</h1>
      </main>
    </>
  );
}
