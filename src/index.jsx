import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import VanillaTilt from 'vanilla-tilt'
import IntroSection from './IntroSection.jsx'
import React, { useRef, useState, useEffect } from 'react'



const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(
    <>
        <IntroSection />
        <Canvas className='canvas'
            camera={{
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [0, 0, 1]
            }}
        >
            <Experience />
        </Canvas>
    </>
)