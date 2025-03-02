import Link from "next/link";
import "./nav.css";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";

function BurgerIcon({ openMenu, setOpenMenu, container }) {
  const { contextSafe } = useGSAP(() => {}, { scope: container });
  // handle link animation
  const handleMouseEnter = contextSafe(() => {
    gsap.to(".follower", {
      scale: 1,
    });
  });
  const handleMouseLeave = contextSafe((e) => {
    gsap.to(".follower", {
      scale: 0,
    });
    gsap.to(e.target, {
      x: 0,
      y: 0,
      ease: "elastic",
    });
  });
  const handleMouseMove = contextSafe((e) => {
    const move = 10;
    const left = e.pageX,
      top = e.pageY;
    const heading = e.target;
    gsap.to(".follower", {
      left: left,
      top: top,
    });
    gsap.to(e.target, {
      x: (e.nativeEvent.offsetX / heading.clientWidth) * (move * 2) - move,
      y: (e.nativeEvent.offsetY / heading.clientHeight) * (move * 2) - move,
    });
  });

  return (
    <div className="d-flex align-items-center gap-2 ">
      <p className="m-0 p-0">menu</p>
      <div
        className="burger-icon overlay"
        ref={container}
        aria-label="icon"
        onClick={() => setOpenMenu((prev) => !prev)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="line-1"></div>
        <div className="line-2"></div>
      </div>
    </div>
  );
}

function LogoImage() {
  const container = useRef();
  const { contextSafe } = useGSAP(() => {}, { scope: container });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="70"
      viewBox="0 0 117.107 88.698"
      ref={container}
    >
      <g id="logo-svg" transform="translate(-921.829 -531)">
        <g
          id="Ellipse_1"
          data-name="Ellipse 1"
          transform="translate(969 535)"
          fill="none"
          stroke="current-color"
          stroke-width="5"
        >
          <ellipse cx="11.5" cy="12" rx="11.5" ry="12" stroke="none" />
          <ellipse cx="11.5" cy="12" rx="9" ry="9.5" fill="none" />
        </g>
        <g
          id="Ellipse_3"
          data-name="Ellipse 3"
          transform="translate(1004 531)"
          fill="none"
          stroke="current-color"
          stroke-width="5"
        >
          <ellipse cx="11.5" cy="12" rx="11.5" ry="12" stroke="none" />
          <ellipse cx="11.5" cy="12" rx="9" ry="9.5" fill="none" />
        </g>
        <g
          id="Ellipse_2"
          data-name="Ellipse 2"
          transform="translate(933 535)"
          fill="none"
          stroke="current-color"
          stroke-width="5"
        >
          <ellipse cx="11.5" cy="12" rx="11.5" ry="12" stroke="none" />
          <ellipse cx="11.5" cy="12" rx="9" ry="9.5" fill="none" />
        </g>
        <path
          id="Path_1"
          data-name="Path 1"
          d="M962.132,604.72c-5.037,4.318-13.673,14.153-30.224,12.234s-2.878-51.573,11.994-52.532,32.383,24.227,38.859,23.987"
          fill="none"
          stroke="current-color"
          stroke-linecap="round"
          stroke-width="5"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M953.556,595.365s12.048-29.856,27.962-31.509c6.718-.268,13.956,3.2,19.953,14.958.137.109,10.1,16.887,9.291,23.766-1.439,12.234-8.812,21.33-22.244,3.1"
          fill="none"
          stroke="current-color"
          stroke-linecap="round"
          stroke-width="5"
        />
        <path
          id="Path_3"
          data-name="Path 3"
          d="M1001.474,598.641s19.861,14.487,27.338,12.384,9.126-15.936,6.228-26.738-16.791-39.446-37.587-12.108"
          fill="none"
          stroke="current-color"
          stroke-linecap="round"
          stroke-width="5"
        />
      </g>
    </svg>
  );
}
export default function Header() {
  const container = useRef();
  const tl = useRef();
  const logoRef = useRef();
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    {
      id: 1,
      name: "Home",
      href: "/",
      label: "الصفحه الرئيسية",
    },
    {
      id: 2,

      name: "Features",
      href: "/features",
      label: "المميزات",
    },
    {
      id: 3,
      name: "Companies-Schools",
      href: "/companies-schools",
      label: "شركاء المدرسة",
    },
    {
      id: 4,
      name: "Plans",
      href: "/plans",
      label: "الخطط",
    },
    {
      id: 5,
      name: "About",
      href: "/about",
      label: "عنا",
    },
  ];
  useGSAP(
    () => {
      if (openMenu) {
        gsap.to(".burger-icon .line-1", {
          top: "50%",
          yPercent: -50,
          rotate: 45 + 180,
        });
        gsap.to(".burger-icon .line-2", {
          bottom: "50%",
          yPercent: -50,
          rotate: -45 + 180,
        });
        tl.current = gsap
          .timeline()
          .to("nav", {
            translateX: 0,
            ease: "circ.in",
          })
          .fromTo(
            "nav ul li a",
            {
              yPercent: 100,
              stagger: 0.1,
              ease: "circ.out",
            },
            { yPercent: 0, stagger: 0.1, ease: "circ.out" }
          )
          .to("nav .action-buttons button", {
            opacity: 1,
            top: 0,
            stagger: 0.3,
          });
      } else {
        gsap.to(".burger-icon .line-1", {
          top: 0,
          yPercent: 0,
          rotate: 0,
        });
        gsap.to(".burger-icon .line-2", {
          bottom: 0,
          yPercent: 0,
          rotate: 0,
        });
        tl.current = gsap
          .timeline()
          .to("nav ul li a", {
            yPercent: 100,
            stagger: 0.1,
            ease: "circ.out",
          })
          .to("nav .action-buttons button", {
            top: 10,
            opacity: 0,
            stagger: 0.2,
          })
          .to("nav", {
            translateX: "-100%",
            ease: "circ.out",
          });
      }
      gsap.set(".logo svg", {
        // 145
        strokeDasharray: 145,
        strokeDashoffset: 145,
      });
      gsap.to(".logo svg", {
        strokeDashoffset: 0,
        duration: 2,
        delay: 0.5,
      });
    },
    { scope: container, dependencies: [openMenu] }
  );

  return (
    <header ref={container}>
      <div className="follower"></div>
      <div className="container">
        {/* logos */}
        <div className="logo navbar-brand">
          <Link href={"/"}>
            <LogoImage logoRef={logoRef} />
            <h3>Bridge It</h3> {/*Bridge It*/}
          </Link>
        </div>
        {/* links */}
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className="overlay">
                  <span className="span-link-container">
                    <span>
                      {link.name.split("").map((e, i) => (
                        <span key={i} className="character">
                          {e}
                        </span>
                      ))}
                    </span>
                    <span>
                      {link.name.split("").map((e, i) => (
                        <span key={i} className="character">
                          {e}
                        </span>
                      ))}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {/* sign and register */}
          <div className="action-buttons">
            <button className="btn login animation-button">
              <span className="span-container">
                <span>
                  <Link href="/login">Log In</Link>
                </span>
                <span>
                  <Link href="/login">Log In</Link>
                </span>
              </span>
            </button>
            <button className="btn sign-in animation-button">
              <span className="span-container">
                <span>
                  <Link href="/signup">Start for free</Link>
                </span>
                <span>
                  <Link href="/signup">Start for free</Link>
                </span>
              </span>
            </button>
          </div>
        </nav>
        {/* burger icon  */}

        <BurgerIcon
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          container={container}
        />
      </div>
    </header>
  );
}
