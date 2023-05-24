import React from 'react';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import '../Styles/VideoChat.css'

const VideoChat = () => {
  return (
    <div id='Video Chat' className='video-Container' >
      <div className='video-Headline'>
        <h1>Video Chat</h1>
        <VideoChatIcon className='video-Icon'/>
      </div>
      <div className='video-Info'>
        <img className='video-Image' src='https://images.wondershare.com/filmora/article-images/google-duo-app.JPG' alt='videoIcon'/>
        <h1 className='video-Description'>Foster deeper connections with our Video Chat feature. Engage in face-to-face conversations and discover a new level of personal interaction. Get to know potential partners better as you share moments and build a stronger bond. With Video Chat, distance is no longer a barrier to connecting authentically on Nikah Forever.</h1>
      </div>
    </div>
  )
}

export default VideoChat;