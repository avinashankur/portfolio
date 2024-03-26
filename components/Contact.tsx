import Link from "next/link";
const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 my-24 max-w-3xl mx-auto px-8 anim-op">
      <h2 className="uppercase font-bold">
        Contact me
      </h2>
      <div id="lwt">
        <Link
          href="/contact"
          id="lynx"
          className="child text-purple-500 font-anton text-3xl lg:text-5xl underline uppercase"
        >
          Let&#39;s Work Together!
        </Link>
      </div>
    </div>
  );
};

export default Contact;
