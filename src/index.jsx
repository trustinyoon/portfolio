import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import VanillaTilt from 'vanilla-tilt'
import IntroSection from './IntroSection.jsx'
import React, { useRef, useState, useEffect } from 'react'
import { ScrollControls, Scroll } from '@react-three/drei'



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
            <ScrollControls damping={6} pages={5}>
                <Scroll html style={{ width: '100%' }}>
                    <h1 style={{ zIndex: 1000, position: 'absolute', top: `100vh`, right: '20vw', fontSize: '25em', transform: `translate3d(0,-100%,0)` }}>all</h1>
                    <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>hail</h1>
                    <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>thee,</h1>
                    <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>thoth</h1>
                    <h1 style={{ position: 'absolute', top: '450vh', right: '10vw' }}>
                        her
                        <br />
                        mes.
                    </h1>
                </Scroll>
                <Experience />
            </ScrollControls>
        </Canvas>
    </>
)