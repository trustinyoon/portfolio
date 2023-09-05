import { useScroll, shaderMaterial, Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Plane } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import { extend } from '@react-three/fiber'
import React, { useRef, useState, useEffect } from 'react'



export default function Experience()
{
    const { viewport } = useThree()
    const viewportWidth = viewport.width
    const viewportHeight = viewport.height


    
    return <>

        <color args={ [ 'red' ] } attach="background" />

        <Environment preset="city" />
        
        <Plane args={[viewportWidth * .8, viewportHeight * .8, 1, 1]}> 
            {/* <ShaderGraphicMaterial/> */}
            <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} ></shaderMaterial>
        </Plane>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}