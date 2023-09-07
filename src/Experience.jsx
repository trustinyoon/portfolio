import { useScroll, shaderMaterial, Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Plane, MeshTransmissionMaterial, MeshReflectorMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import { extend } from '@react-three/fiber'
import React, { useRef, useState, useEffect } from 'react'

function RotatingBox({ position, rotationY }) {
    const boxMesh = useRef()
    const { camera } = useThree();


    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false);

    const handlePointerOver = () => {
        setIsHovered(true)
    }

    const handlePointerOut = () => {
        setIsHovered(false)
    }

    const handleBoxClick = () => {
        if (!isClicked) {
            // Log "clicked" once when the box is clicked
            console.log('clicked');

            // Calculate rotation to make the box face the camera
            const rotation = Math.atan2(camera.position.x - boxMesh.current.position.x, camera.position.z - boxMesh.current.position.z);
            boxMesh.current.rotation.y = rotation;
        }
        setIsClicked(!isClicked);

    };

    useFrame(() => {
        boxMesh.current.rotation.y += .005

        if (isHovered) {
            boxMesh.current.rotation.y += .01
            console.log('hovered')
        }

    })
    
    return (
        <mesh ref={boxMesh} position={position} rotation={[0, rotationY, 0]} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} onClick={handleBoxClick}
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

    const material = useRef()
    const numBoxes = 5;
    const spacing = 0.07;


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