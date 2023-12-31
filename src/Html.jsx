import { useEffect } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import React from 'react'
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Html() {
  const scroll = useScroll()

  useEffect(() => {
    const splitNameHeader = new SplitType('.nameHeader');
    // const splitTitleHeader = new SplitType('.titleHeader');

    gsap.to('.char', {
      duration: .2,
      y: 0,
      delay: 0,
      stagger: 0.1,
    });

    // Clean up the SplitType instance when the component unmounts
    return () => {
      splitName.revert(); // Revert SplitType changes
    };
  }, []); // Empty dependency array ensures this code runs only on mount and unmount

  useFrame(() => {
    const scrollProgress = scroll.range(0, 1 / 5)
    // console.log(scrollProgress)

    // Calculate the blur value based on scrollProgress (adjust the range as needed)
    const blurValue = gsap.utils.mapRange(0, 1, 0, 40, scrollProgress);

    // Apply the blur effect to the nameContainer element
    gsap.to('.nameContainer', { filter: `blur(${blurValue}px)` });

  })
  
  return <>
    <div className='nameContainer'>
      <span className='titleHeader'>MULTI-DISCIPLINARY GENERALIST</span>
      <h1 className='nameHeader'>TRUSTIN</h1>
      <div className='titlesContainer'>
        <span>FOUNDER</span>
        <span>GROWTH</span>
        <span>PRODUCT</span>
        <span>OPERATIONS</span>
        <span>CREATIVE TECHNOLOGIST</span>
      </div>
    </div>
    <h1 style={{ position: 'absolute', top: `100vh`, right: '20vw', fontSize: '1rem', transform: `translate3d(0,-100%,0)` }}>all</h1>
    <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>hail</h1>
    <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>thee,</h1>
    <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>thoth</h1>
    <h1 style={{ position: 'absolute', top: '450vh', right: '10vw' }}>
      her
      <br />
      mes.
    </h1>

  </>
}