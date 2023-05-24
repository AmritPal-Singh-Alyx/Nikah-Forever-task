import React from 'react';
import '../Styles/AudioChat.css'
import VoiceChatIcon from '@mui/icons-material/VoiceChat';

const AudioChat = () => {
  return (

    <div id='Audio Chat' className='audio-Container'  >
      <div className='audio-Headline'>
        <h1 className=''>AudioChat</h1>
        <VoiceChatIcon className='audio-Icon' />
      </div>
      <div className='audio-Info'>
        <img className='audio-Image' src='https://cdn-icons-png.flaticon.com/512/5084/5084179.png' alt='audioIcon'></img>
        <h1 className='audio-Description'>Connect effortlessly through our convenient and personal Audio Chat feature. Experience real-time conversations, share stories, and express yourself with the warmth of your voice. Foster deeper connections and discover compatibility like never before. Enhance your matrimony experience with Nikah Forever's Audio Chat</h1>
      </div>
    </div>
  )
}

export default AudioChat;