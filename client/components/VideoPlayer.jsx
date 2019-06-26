import React from 'react';

const VideoPlayer = (props) => {
  return (
  	<div class="embed-responsive embed-responsive-16by9">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/pS4tZQ_SkUs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  	)
};

export default VideoPlayer;