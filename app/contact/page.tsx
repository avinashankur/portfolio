"use client";
import Link from "next/link";
import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";

export default function Contact() {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hioa7db",
        "template_xubopfk",
        form.current!,
        "VclPaFUt6r8H5MCOt"
      )
      .then(
        (result) => {
          (e.target as HTMLFormElement).reset();
          window.alert("Message Sent. 😀");
        },
        (error) => {
          window.alert(
            "Something went wrong! Please try again or use the Email instead! 🫤"
          );
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Link
        href="/"
        className="px-8 xl:px-[15rem] mt-[5rem] absolute font-bold text-sky-400 text-lg hover:text-neutral-400 transition"
      >
        &#60; Home
      </Link>
      <main className="px-8 xl:px-[15rem] pt-[10rem]">
        <h1 className="text-5xl lg:text-9xl font-bold font-anton tracking-wider uppercase">
          Contact
        </h1>
        {/* <div className="mt-16 max-w-lg flex gap-2 justify-between text-sm text-neutral-300">
          <p className="border-2 px-3 py-2 rounded-lg items-center flex flex-col gap-3 border-neutral-800">
            <FaLocationDot className="text-2xl" />
            Noida, India
          </p>
          <Link
            href="mailto:avinashhankur@gmail.com"
            className="border-2 px-3 py-2 rounded-lg items-center flex flex-col gap-3 border-neutral-800 hover:bg-neutral-800 transition"
          >
            <IoMailOpen className="text-3xl" />
            avinashhankur@gmail.com
          </Link>
        </div> */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex flex-col gap-4 mt-8 mb-[12rem] max-w-lg"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              name="from_name"
              required
              className="px-2 py-4 rounded-lg flex-1 text-black"
            />
            <input
              type="text"
              placeholder="Email"
              name="from_email"
              className="px-2 py-4 rounded-lg flex-1 text-black"
            />
          </div>
          <textarea
            placeholder="Message"
            name="message"
            id=""
            required
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
