import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import "./sections.css";
import { splitText } from "../../../../util/splitText";
const Sections = () => {
  const container = useRef();
  const timeline = useRef(); // Added ref for the wrapper
  const sections = [
    {
      title: "Work Together  Wherever You Are",
      body: "Teamwork has never been easier! Stay connected and collaborate in real-time with tools like shared docs, whiteboards, and group chats. Whether you're working with classmates or supervisors, everything you need is at your fingertips.",
      button: "try it now",
      image: "work-together.svg",
      direction: "row",
    },
    {
      title: "Your Data, Your Rules",
      body: "We take your data security seriously. You control who gets access to your files, with customizable permissions and top-notch encryption. Share what you need, when you need to, and keep everything else safe and sound.",
      button: "try it now",
      image: "Element.svg",
      direction: "row-reverse",
    },
    {
      title: "Everything You Need,All in One Place",
      body: "No more juggling a bunch of apps! Our platform has all the tools you need—organize tasks, chat with your team, share files, and hop on video calls—so you can focus on your project, not switching between tools.",
      button: "try it now",
      image: "EveryThing.svg",
      direction: "row",
    },
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const sectionsArr = gsap.utils.toArray(".section .image img");
      gsap.to(".section-title h2 .parent-span span span", {
        translateY: 0,
        ease: "circ.out",
        stagger: 1,
        duration: 20,
        scrollTrigger: {
          trigger: ".section-title h2 ",
          scrub: true,
          start: "top 10%",
        },
      });
      sectionsArr.map((section) =>
        gsap.to(section, {
          translateY: 0,
          rotate: 0,
          ease: "circ.out",
          scrollTrigger: {
            trigger: section,
          },
        })
      );
    },
    { scope: container }
  );
  return (
    <section className="sections-container" ref={container}>
      <div className="section-title">
        <h2>
          <span className="parent-span">
            <span>{splitText("Powerful", "span")}</span>
          </span>
          <span className="parent-span">
            <span>{splitText("Features to", "span")}</span>
          </span>
          <span className="parent-span">
            <span>{splitText("Simplify Your", "span")}</span>
          </span>
          <span className="parent-span">
            <span>{splitText("Scheduling", "span")}</span>
          </span>
        </h2>
      </div>
      <div className="container">
        {/* <p>
            Discover how our Al-driven tools can transform your
            <br /> productivity and streamline your day
          </p> */}
        <div className="wrapper">
          {sections.map((section) => (
            <div
              className="section"
              key={section.title}
              style={{ flexDirection: section.direction }}
            >
              <div className="text">
                <h3>{section.title}</h3>
                <p suppressContentEditableWarning={true}>{section.body}</p>
                <button className="main-button animation-button">
                  <span className="span-container">
                    <span>{section.button}</span>
                    <span>{section.button}</span>
                  </span>
                </button>
              </div>
              <div className="image">
                <Image
                  width={500}
                  height={500}
                  alt="section-image"
                  src={"/" + section.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sections;
