"use client";
import { useState } from "react";
import MainLoader from "./Components/MainLoader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MainpageLayout from "./Components/MainPage";

export default function Home() {
  const [loader, setLoader] = useState(true);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set(".load", {
        height: 0
    })
    .to(".load", {
        delay: 1,
        duration: 1,
        height: "8rem"
    })
    .to(".load", {
        duration: 1.5,
        scaleX: 3,
        scaleY: 16,
        ease: "power2.inOut",
       
    })
    .to(".main",{
      backgroundColor:"#18181B"
    })
    .to(".load", {
        onComplete: () => setLoader(false)
    });
});

  return (
    <div className=" main relative w-screen h-screen bg-zinc-100 overflow-hidden">
      {loader ? <MainLoader setLoader={setLoader} /> : <MainpageLayout/>}
    </div>
  );
}
