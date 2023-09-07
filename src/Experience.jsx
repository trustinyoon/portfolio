import { useScroll, shaderMaterial, Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Plane, MeshTransmissionMaterial, MeshReflectorMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import { extend } from '@react-three/fiber'
import React, { useRef, useState, useEffect } from 'react'

function RotatingBox({ position, rotationY, onClick, isHovered }) {
    const boxMesh = useRef()
    const { camera } = useThree();


    const handleBoxClick = () => {
        // Notify the parent component about the click
        onClick();
        console.log('clicked')
    };


    const handlePointerOver = () => {
        isHovered = true
    }

    const handlePointerOut = () => {
        isHovered = false
    }

    useFrame(() => {
        boxMesh.current.rotation.y += .005

        if (isHovered) {
            boxMesh.current.rotation.y += .01
            console.log('hovered')
        }

    })
    
    return (
        <mesh 
            ref={boxMesh} 
            position={position} 
            rotation={[0, rotationY, 0]} 
            onPointerOver={handlePointerOver} 
            onPointerOut={handlePointerOut} 
            onClick={handleBoxClick}
>
            <boxGeometry args={[.5, .03, .5]} />
            <MeshTransmissionMaterial
                color={0xfffff0}
                // transparent={true}
                // opacity={1}
                // thickness={2}
                // anisotropy={0.2}
                // chromaticAberration={0.01}
                // ior={1.5}
            />
        </mesh>
    )
}

export default function Experience()
{
    const { viewport } = useThree()
    const viewportWidth = viewport.width
    const viewportHeight = viewport.height

    const numBoxes = 5;
    const spacing = 0.07;

    const [clickedBox, setClickedBox] = useState(null);

    const handleBoxClick = (index) => {
        if (clickedBox === index) {
            // Clicked the same box again, so unclick it
            setClickedBox(null);
        } else {
            // Clicked a different box, so set it as clicked
            setClickedBox(index);
        }
    };

    useFrame(({ clock }) => {
        // material.current.uniforms.uTime.value = clock.getElapsedTime()
        // console.log(material.current.uniforms.uTime.value)
    })
    
    return <>

        <color args={ [ 'ivory' ] } attach="background" />

        {/* <Environment preset="city"  /> */}

        {/* Create a stack of rotating boxes with spacing */}
        {Array.from({ length: numBoxes }).map((_, index) => (
            <RotatingBox
                key={index}
                position={[0, -0.5 - (index * (spacing)) - 0.25, 0]}
                rotationY={index * 0.08}
                isHovered={false}
                onClick={() => handleBoxClick(index)}
            />
        ))}

        
        {/* <Plane position={[0, -.5, 0]} args={[viewportWidth * .5, viewportHeight * .5, 1, 1]}> 

            <shaderMaterial vertexShader={vertexShader} 
                            fragmentShader={fragmentShader} 
                            uniforms={{
                                uTime: { value: 0 },
                                uMouse: { value: [0, 0] },
                                uResolution: { value: [viewportWidth, viewportHeight] },
                            }}
                            ref={material}
            ></shaderMaterial>
        </Plane> */}

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}