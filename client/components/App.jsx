import React from 'react';

import Headers from './Headers.jsx';
import VideoPlayer from './VideoPlayer.jsx'

const bodyStyle = {
	width: '100%',
	height: '800px'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }
  render() {
  	return (
  	  <div className='container d-flex flex-column h-100 mt-5'>
  	    <Headers />
  	    <hr class="featurette-divider" />
  	    <VideoPlayer />
  	  </div>
  	  )
  }
};

export default App;