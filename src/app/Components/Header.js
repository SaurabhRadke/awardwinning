"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function HeaderSection(){
    useGSAP(()=>{
        gsap.from(".header",{
            delay:0.2,
            y:-20,
            duration:0.3,
        })
    })
    return(
        <div className=" w-full h-12  flex items-center justify-between px-4">
            <h1 className="header">logo</h1>
            <nav className="header">Navigation</nav>
            <div className="header">Let's Talk</div>
        </div>
    )
}