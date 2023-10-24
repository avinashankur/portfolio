import Link from "next/link";
const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 my-24 max-w-3xl mx-auto px-8">
      <h2 className="uppercase font-bold">
        Contact me
      </h2>
      <div id="lwt">
        <Link
          href="/contact"
          id="lynx"
          className="child text-sky-400 font-bold text-2xl lg:text-4xl tracking-tighter underline uppercase"
        >
          Let's Work Together!
        </Link>
      </div>
    </div>
  );
};

export default Contact;
