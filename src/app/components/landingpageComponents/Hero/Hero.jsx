import "./hero.css";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { splitText } from "../../../../util/splitText";
const Hero = () => {
  const container = useRef();
  const video = useRef();
  const videoPreview = useRef();
  const [videoStatus, setVideoStatus] = useState("paused");
  const mainTitle = "Generation Documentation";
  const description1 = `Easy-to-use platform for generating and managing documentation. With
  support`;
  const description2 = `  and creating professional - grade documentation has never
  been simpler`;
  const tl1 = useRef();
  const tl2 = useRef();
  // animation hero section
  const { contextSafe } = useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      // video with scroll
      gsap.to(".video-preview", {
        width: "100%",
        scrollTrigger: {
          trigger: ".video-preview",
          scrub: true,
        },
      });
      tl1.current = gsap
        .timeline()
        // subtitle
        .from("h6 span", {
          yPercent: 100,
          opacity: 0,
          ease: "power1",
          duration: 0.5,
        })
        // main title
        .from("h3 span", {
          yPercent: 100,
          stagger: 0.02,
          ease: "circ",
          delay: 0.2,
        });

      // the description
      tl2.current = gsap
        .timeline()
        .from(".description .text-1 span", {
          opacity: 0,
          stagger: 0.01,
        })
        .from(".description .text-2 span", {
          opacity: 0,
          stagger: 0.01,
        });
    },
    { scope: container }
  );
  useGSAP(
    () => {
      gsap.fromTo(
        ".follower span",
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
        }
      );
    },
    { scope: videoPreview, dependencies: [videoStatus] }
  );

  // show the mouse follower
  const handleMouseMove = contextSafe((e) => {
    gsap.to(".video-preview .follower", {
      scale: 1,
      top: e.pageY,
      left: e.pageX,
    });
  });
  const handleMouseLeave = contextSafe(() => {
    gsap.to(".video-preview .follower", {
      scale: 0,
      ease: "circ.out",
    });
  });

  // handle play and paused video
  const handleVideoPlay = () => {
    const currentVideo = video.current;
    if (currentVideo.paused) {
      currentVideo.play();
      setVideoStatus("Paused");
    } else {
      currentVideo.pause();
      setVideoStatus("Played");
    }
  };

  return (
    <section className="hero" ref={container}>
      <div className="container">
        <h6>
          <span>Pre-built method for</span>
        </h6>
        <h3 className="main-title">{splitText(mainTitle, "span")}</h3>
        <p className="description">
          <span className="text-1">{splitText(description1, "span")}</span>
          <span className="text-2">{splitText(description2, "span")}</span>
        </p>

        <div className="search-bar">
          {/* Join Web 3 Community */}
          <div className="search-content">
            <div>
              <input type="text" placeholder="Join To Bridge" />
              <button>Try it Now!</button>
            </div>
          </div>
          <div className="demo-text">
            <p>Try our demo of dashboard now! - </p>
            <Link href="">
              learn more
              <FaArrowRight style={{ marginLeft: "3px" }} />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="video-preview overlay"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleVideoPlay}
        ref={videoPreview}
      >
        <div className="follower">
          <span>{videoStatus}</span>
        </div>
        <video
          muted
          autoPlay
          loop
          className="video"
          controls={false}
          ref={video}
        >
          <source src="showreel-home.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
export default Hero;
