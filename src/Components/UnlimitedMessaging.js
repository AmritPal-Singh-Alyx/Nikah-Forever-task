import React from 'react';
import MessageIcon from '@mui/icons-material/Message';
import '../Styles/UnlimitedMessaging.css'

const UnlimitedMessaging = () => {
  return (
    <div id='Messaging' className='message-Container' >
      <div className='message-Headline'>
        <h1>Messaging</h1>
        <MessageIcon className='message-Icon' />
      </div>
      <div className='message-Info'>
        <h1 className='message-Description'>Connect without boundaries through our Unlimited Messaging feature. Exchange messages freely and engage in meaningful conversations with potential partners. Enjoy the freedom to express yourself and discover compatibility at your own pace. Experience limitless communication on Nikah Forever.</h1>
        <img className='message-Image' src='https://media.istockphoto.com/id/1131893484/vector/short-message-service-bubbles-with-place-for-text-chat-text-boxes-empty-messaging-bubles.jpg?s=612x612&w=0&k=20&c=UI0RoHhQF4jyB7Ld2OxPGOvuRAqtOQrmdr5XIelLQp8=' alt='messageIcon' />
      </div>
    </div>

  )
}

export default UnlimitedMessaging;