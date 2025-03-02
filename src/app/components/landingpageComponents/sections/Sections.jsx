import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import "./sections.css";
import { doesNotThrow } from "assert";
const Sections = () => {
  const container = useRef();
  const sections = [
    {
      title: "Work Together Wherever You Are",
      body: "Teamwork has never been easier! Stay connected and collaborate in real-time with tools like shared docs, whiteboards, and group chats. Whether you're working with classmates or supervisors, everything you need is at your fingertips.",
      button: "try it now",
      image: "work-together.svg",
      direction: {
        top: 0,
        left: 50,
      },
    },
    {
      title: "Your Data, Your Rules",
      body: "We take your data security seriously. You control who gets access to your files, with customizable permissions and top-notch encryption. Share what you need, when you need to, and keep everything else safe and sound.",
      button: "try it now",
      image: "work-together.svg",
      direction: {
        left: 0,
        bottom: 0,
      },
    },
    {
      title: "Everything You Need,All in One Place",
      body: "No more juggling a bunch of apps! Our platform has all the tools you need—organize tasks, chat with your team, share files, and hop on video calls—so you can focus on your project, not switching between tools.",
      button: "try it now",
      image: "work-together.svg",
      direction: {
        right: 0,
        bottom: 0,
      },
    },
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
    },
    { scope: container }
  );
  return (
    <section ref={container} className="sections-container">
      <div className="images-container">
        {sections.map((section) => (
          <div
            className="image"
            style={{
              position: "absolute",
              left: section.direction.left,
              bottom: section.direction.bottom,
            }}
          >
            <Image
              src={section.image}
              width={500}
              height={500}
              alt="image-section"
            />
          </div>
        ))}
      </div>
      <div className="container"></div>
    </section>
  );
};

export default Sections;
