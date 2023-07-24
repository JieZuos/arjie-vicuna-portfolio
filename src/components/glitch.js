import React, { useEffect } from 'react';
import { PowerGlitch } from 'powerglitch';

const Glitch = () => {
  useEffect(() => {
    PowerGlitch.glitch('.glitching', {
      "playMode": "always",
      "createContainers": true,
      "hideOverflow": true,
      "timing": {
        "duration": 4000,
        "easing": "ease-in-out"
      },
      "glitchTimeSpan": {
        "start": 0.5,
        "end": 0.7
      },
      "shake": {
        "velocity": 15,
        "amplitudeX": 0.41,
        "amplitudeY": 0.34
      },
      "slice": {
        "count": 6,
        "velocity": 15,
        "minHeight": 0.02,
        "maxHeight": 0.15,
        "hueRotate": true
      },
      "pulse": false
    });
  }, []);

  return (
    <>
    <div className='glitching text-center text-light'>
      <h4 className=''>Hi, I Am</h4>
      <h1>
        Arjie Angelo Vicuña
      </h1>
      <h3 className="typewrite" data-period="1000" data-type='["Im A Developer.", "I Love 3d Modeling.", "I Am Creative."]'>
        <span className="wrap"></span>
      </h3>
    </div>
    </>
  );
};

export default Glitch;
