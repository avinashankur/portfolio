import Link from "next/link";
export default function Contact() {
  return (
    <>
      <Link
        href="/"
        className="px-8 xl:px-[15rem] mt-[5rem] absolute font-bold text-sky-400 text-lg hover:text-neutral-400 transition"
      >
        &#60; Home
      </Link>
      <main className="px-8 xl:px-[15rem] pt-[10rem]">
        <h1 className="text-5xl lg:text-9xl font-bold tracking-tighter uppercase">
          Contact
        </h1>
        <form
          action=""
          className="flex flex-col gap-4 mt-8 mb-[12rem] max-w-lg"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="px-2 py-4 rounded-lg flex-1 text-black"
            />
            <input
              type="text"
              placeholder="Email"
              className="px-2 py-4 rounded-lg flex-1 text-black"
            />
          </div>
          <textarea
            placeholder="Message"
            name="msg"
            id=""
            className="px-2 py-4 rounded-lg h-40 text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-sky-400 rounded-lg py-4 text-black uppercase font-medium hover:bg-sky-500 transition"
          >
            Send
          </button>
        </form>
      </main>
    </>
  );
}
