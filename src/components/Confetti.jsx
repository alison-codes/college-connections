import React from 'react';
import ConfettiGenerator from 'confetti-js';

const Confetti = (props) => {
  React.useEffect(() => {
    const confettiSettings = { target: `my-canvas${props.idx}` };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(confetti.clear, 10000);
    return () => confetti.clear();
  })
  return (
    <div className="confetti">
      <canvas id={`my-canvas${props.idx}`}></canvas>
    </div>
  );
}

export default Confetti;