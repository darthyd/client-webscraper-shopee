import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/space-loading.json'

import {Animation} from '../styles'

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function Load(){
  const [animationState] = useState({
    isStopped: true, isPaused: false
  });
  
  return(
    <Animation>
      <Lottie 
      options={defaultOptions}
      height={400}
      width={400}
      isStopped={animationState.isStopped}
      isPaused={animationState.isPaused} />
      <p className="load-text">LOADING...</p>
    </Animation>
  )
}

export default Load;