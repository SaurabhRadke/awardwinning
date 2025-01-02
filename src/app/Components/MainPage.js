"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import HeaderSection from "./Header"

export default function MainpageLayout(){
    useGSAP(()=>{
        gsap.from('.head',{
            y:50,
            duration:0.3,
        })
    })
    return(
        <div className="text-zinc-100 w-screen min-h-screen bg-zinc-900">
            <HeaderSection/>
            <div className=" w-full h-[80vh]  flex justify-center items-center ">
            <div className=" w-auto h-auto overflow-hidden  ">
            <h1 className=" head text-[2.4rem] tracking-tighter md:text-[5rem]">Main Page Loader</h1>
            </div>
            </div>
            
            
        </div>
    )
}