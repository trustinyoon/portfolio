import { useScroll, shaderMaterial, Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Plane, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import { extend } from '@react-three/fiber'
import React, { useRef, useState, useEffect } from 'react'



export default function Experience()
{
    const { viewport } = useThree()
    const viewportWidth = viewport.width
    const viewportHeight = viewport.height

    const material = useRef()


    useFrame(({ clock }) => {
        material.current.uniforms.uTime.value = clock.getElapsedTime()
        console.log(material.current.uniforms.uTime.value)
    })
    
    return <>

        <color args={ [ 'ivory' ] } attach="background" />

        <Environment preset="city" />

        <mesh position={[0, -viewportHeight, 0]} rotation={[0, 0, 0]}>
            <boxGeometry args={[.5, .05, .5]} />
            <MeshTransmissionMaterial 
                color={0xfffff0}
                transparent={true} 
                opacity={1} 
                thickness={2} 
                anisotropy={0.2} 
                chromaticAberration={0.01} 
                ior={1.5} />
        </mesh>

        
        <Plane position={[0, -.5, 0]} args={[viewportWidth * .5, viewportHeight * .5, 1, 1]}> 
            {/* <ShaderGraphicMaterial/> */}
            <shaderMaterial vertexShader={vertexShader} 
                            fragmentShader={fragmentShader} 
                            uniforms={{
                                uTime: { value: 0 },
                                uMouse: { value: [0, 0] },
                                uResolution: { value: [viewportWidth, viewportHeight] },
                            }}
                            ref={material}
            ></shaderMaterial>
        </Plane>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}