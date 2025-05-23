import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"
import { watchImg } from '../utils';
import { rightImg } from '../utils';
import VideoCarousel from './VideoCarousel'


const Highlights = ()  => {
    useGSAP(()=>{
        gsap.to('#title', {opacity:1, y:0}),
        gsap.to('.link', {opacity:1, y:0, duration:1, stagger:0})
    }, [])

    return (
        <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width">
                <div className="w-full mb-12 md:flex items-end justify-between">
                    <h1 id="title" className="section-heading"> Get the highlights. </h1>
                    <div className="flex flex-wrap items-end gap-5">
                        <p className="link"> 
                            Watch the film <img className="ml-2" src={watchImg} alt="watch" />
                        </p>
                        <p className="link"> 
                            Watch the event <img className="ml-2" src={rightImg} alt="right" />
                        </p>
                    </div>
                </div>

                <VideoCarousel />
            </div>
        </section>
    )
}
  
export default Highlights