import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

import phone from "../../../assets/hero/iPhone-14-Pro-Perspective-Mockup 1.png";
import apple from "../../../assets/hero/apple.png";
import play from "../../../assets/hero/play.png";
import greenBg from "../../../assets/hero/greenBg.png";
import leftCircle from "../../../assets/hero/leftCircle.png";
import rightCircle from "../../../assets/hero/rightCircle.png";

const Hero = () => {
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);

  useGSAP(() => {
    const titleSplit = new SplitText(titleRef.current, { type: "words" });

    gsap.from("#leftCircle", {
      x: -50,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from("#rightCircle", {
      x: 50,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from("#phone", {
      y: -250,
      opacity: 0,
      duration: 1.7,
      ease: "bounce.out",
    });

    gsap.from(titleSplit.words, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    });

    gsap.from(paraRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.6,
    });
    gsap.from(buttonsRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 1.6,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="mb-52 overflow-hidden">
      <div className="flex justify-around gap-10 items-center flex-col lg:flex-row-reverse">
        <div className="relative w-[500px] pb-20">
          <img
            src={leftCircle}
            alt="left-circle"
            className="absolute md:-left-6 left-16 w-28 md:w-auto"
            id="leftCircle"
          />
          <img
            src={greenBg}
            alt="greenBg"
            className="absolute top-20 xl:top-16 left-15 xl:left-10 max-w-sm xl:max-w-2xl"
          />
          <img
            src={phone}
            className="relative left-14 xl:left-20 max-w-sm md:max-w-2xl rounded-lg"
            id="phone"
          />
          <img
            src={rightCircle}
            alt="right-circle"
            className="absolute bottom-4 xl:-bottom-0 right-13 md:-right-8  w-28 md:w-auto"
            id="rightCircle"
          />
        </div>
        <div className="md:w-[500px] text-white">
          <h1
            ref={titleRef}
            className="md:text-6xl text-5xl font-montHeavy text-white  lg:mt-20"
          >
            Wanna Own Real Estate With Just
            <br />
            <span className="md:text-7xl text-5xl font-montBlack">
              500 Taka?
            </span>
          </h1>
          <p ref={paraRef} className="py-6 font-montRegular  text-2xl">
            Start investing in land, flats & resorts. Legally verified.
            Blockchain secured. <br /> Earn rental income & grow your wealth.
          </p>
          <div
            className="flex items-center gap-5"
            id="buttons"
            ref={buttonsRef}
          >
            <img src={apple} alt="apple store" />
            <img src={play} alt="play store " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
