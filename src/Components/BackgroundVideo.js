import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../Styles/BackgroundVideo.css'
import BgVideo from '../assets/BgVideo.mp4'


const BackgroundVideo = () => {
  return (
    <div id='Home' className='w-full h-screen relative'>
      <video src={BgVideo}
        className=' bg-Video'
        autoPlay
        muted
        loop />

      <div className='typed-Animation'>
        <div>

          <h1 className='front-name'>Nikah Forever</h1>
          <h2 className='animated-Description'>
            <TypeAnimation 
              sequence={[
                "India's #1 Muslim", // Types 'One'
                1000, // Waits 1s
                'Matrimony Website', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              
            />
          </h2>
        </div>
        

      </div>
    </div>
  )
}

export default BackgroundVideo;