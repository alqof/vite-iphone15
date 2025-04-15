import { useRef, useState, useEffect } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { explore1Img, explore2Img, exploreVideo } from '../utils';
import { animateWithGsap } from '../utils/animations';


const Features = ()  => {
    const videoRef = useRef()

    useGSAP(()=>{
        animateWithGsap('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })
        animateWithGsap('#features_title', { y:0, opacity:1})
        animateWithGsap('.g_grow', { scale:1, opacity:1, ease:'power1'}, { scrub:5.5 })
        animateWithGsap('.g_text', { y:0, opacity:1, ease:'power2.inOut', duration:1 })
    })
    
    return (
        <section className="h-full relative common-padding bg-zinc overflow-hidden">
            <div className="screen-max-width">
                <div className="w-full mb-12">
                    <h1 id="features_title" className="section-heading"> Explore the full story. </h1>
                </div>

                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="mt-32 mb-24 pl-24">
                        <h2 className="text-5xl lg:text-7xl font-semibold"> iPhone </h2>
                        <h2 className="text-5xl lg:text-7xl font-semibold"> Forged in titanium. </h2>
                    </div>

                    <div className="flex-center flex-col sm:px-10">
                        <div className="relative w-full h-[50vh] mb-5 flex items-center">
                            <video id="exploreVideo" className="w-full h-full rounded-3xl object-cover object-center" playsInline preload="none" muted autoPlay ref={videoRef} >
                                <source src={exploreVideo} type="video/mp4" />
                            </video>
                        </div>

                        <div className="relative w-full flex flex-col">
                            <div className="feature-video-container">
                                <div className="h-[50vh] flex-1 overflow-hidden rounded-3xl">
                                    <img className="feature-video g_grow" src={explore1Img} alt="titanum" />
                                </div>
                                <div className="h-[50vh] flex-1 overflow-hidden rounded-3xl">
                                    <img className="feature-video g_grow" src={explore2Img} alt="titanum 2" />
                                </div>
                            </div>

                            <div className="feature-text-container">
                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        iPhone 15 Pro is {''} <span className="text-white"> the first iPhone to feature an aerospace-grade titanium design </span>, using the same alloy that spacecrafts use for missions to Mars.
                                    </p>
                                </div>
                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        Titanium has one of the best strength-to-weight ratios of any metal, making these our {''} <span className="text-white"> lightest Pro models ever. </span> You'll notice the difference the moment you pick one up.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
  
export default Features