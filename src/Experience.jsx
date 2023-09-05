import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Plane } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { ShaderMaterial } from 'three'

export default function Experience()
{
    const { viewport } = useThree()
    const viewportWidth = viewport.width
    const viewportHeight = viewport.height
    
    return <>

        <color args={ [ '#241a1a' ] } attach="background" />

        <Environment preset="city" />
        
        <Plane args={[viewportWidth, viewportHeight, 1, 1]}> 
            <shaderMaterial></shaderMaterial>
        </Plane>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}