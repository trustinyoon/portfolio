import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import VanillaTilt from 'vanilla-tilt'
import Html from './Html.jsx'
import React, { useRef, useState, useEffect } from 'react'
import { ScrollControls, Scroll } from '@react-three/drei'



const root = ReactDOM.createRoot(document.querySelector('#root'))



root.render(
    <>
        <Canvas className='canvas'
            camera={{
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [0, 0, 1]
            }}
        >
            <ScrollControls damping={.3} pages={5}>
                <Scroll html style={{ width: '100%' }}>
                    <Html />
                </Scroll>
                <Scroll>
                    <Experience />
                </Scroll>
            </ScrollControls>
        </Canvas>
    </>
)