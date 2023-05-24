import React from 'react';

import { BackgroundVideo, NavBar, AudioChat, UnlimitedMessaging, VideoChat } from './Components';

const App = () => {
  return (
    <div>
        <NavBar/>
       <BackgroundVideo/>
       <AudioChat/>
       <UnlimitedMessaging/>
       <VideoChat/>
    </div>
  )
}

export default App;