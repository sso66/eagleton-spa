// File: VideoReact.jsx
// Note: HTML5 Video Element / React JS
// Date: 06/24/2020
//..............................................................................
import React from 'react';

import { Player } from 'video-react';
import "./VideoReact.sass";

export default props => {
    return (
        <Player
            className='player'
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
  );
};

// eof
