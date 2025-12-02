"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import ContactContainer from "../ContactContainer";

export default function ContactPage() {
  useEffect(() => {
    const line = document.querySelector(".contact-line");
    const header = document.querySelector("#contact-header");
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(line, {
      left: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: document.getElementById("contact-header"),
        start: "100px top",
        end: "50% bottom",
      },
    });

    gsap.to(header, {
      transform: "translateY(0)",
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: header,
        start: "100px top",
        end: "50% bottom",
      },
    });
  });
  return (
    <div id="contactSection" className="{poppins.className} p-5">
      <div className="w-fit">
        <h2 className="text-2xl" id="contact-header">
          Contact Me
        </h2>
        <div className="contact-line"></div>
      </div>
      <div className="mt-5 flex flex-wrap justify-center items-center lg:justify-start lg:items-start">
        <ContactContainer
          data={{
            url: "mailto:im.fiekri@gmail.com?subject=Hello%20Iqbal&body=I%20want%20to%20contact%20you.",
            imgUrl: "/icons/email.svg",
            text: "Email",
          }}
        />
        <ContactContainer
          data={{
            url:"https://github.com/Iqbal-Maulana67",
            imgUrl: "/icons/github.svg",
            text: "GitHub",
          }}
        />
      <ContactContainer
          data={{
            url: "https://www.linkedin.com/in/imfiekri",
            imgUrl: "/icons/linkedin.svg",
            text: "Linkedin",
          }}
        />
        <ContactContainer
          data={{
            url:"https://api.whatsapp.com/send/?phone=6283833848095&text&type=phone_number&app_absent=0",
            imgUrl: "/icons/whatsapp.svg",
            text: "Whatsapp",
          }}
        />
      </div>
    </div>
  );
}
