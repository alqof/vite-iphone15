import { Suspense, useRef, useState } from 'react';
import { useEffect } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import * as THREE from 'three';
import { Html, PerspectiveCamera, View } from '@react-three/drei';
import { OrbitControls, useGLTF } from '@react-three/drei';

import Lights from './Lights';
import IPhone from './IPhone';
import Loader from './Loader';

const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, item, size})=>{
    return(
        <View index={index} id={gsapType} className={`absolute w-full h-full ${index===2 ? 'right-[-100%]':''}`}>
            {/* Ambient light */}
            <ambientLight intensity={0.5} />
            <PerspectiveCamera makeDefault position={[0,0,3.5]} />
            <Lights />
            <OrbitControls makeDefault ref={controlRef} enableZoom={false} enablePan={false} rotateSpeed={0.8} target={new THREE.Vector3(0,0,0)} onEnd={()=>setRotationState(controlRef.current.getAzimuthalAngle())} />
            <group ref={groupRef} name={`${index===1}?'small:'large'`} position={[0,0,0,]}>
                <Suspense fallback={<Loader />}>
                    {/* Render iPhone Model */}
                    <IPhone scale={index===1 ? [14,14,14] : [17,17,17]} item={item} size={size} />
                </Suspense>
            </group>
        </View>
    )
}
  
export default ModelView