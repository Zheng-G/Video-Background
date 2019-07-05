// zheng (flow)

import React from 'react'
import { Player } from 'video-react'
import Video from './assets/BB.mp4'
import './styles/App.css'
import './styles/video-react.css'

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <Player fluid autoPlay loop>
        <source src={Video} />
      </Player>
      <div className='content-side'>
        <h1>This is just simple project for background video auto player.</h1>
      </div>
    </header>
  </div>
)

export default App
