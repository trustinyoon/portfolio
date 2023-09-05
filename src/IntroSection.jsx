import { useEffect } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import React from 'react'


export default function IntroSection() 
{
  useEffect(() => {
    const splitName = new SplitType('.nameHeader');

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
  
  return (
    <>
      
      <div className='nameHeader'>TRUSTIN</div>
      

    </>
  )
}