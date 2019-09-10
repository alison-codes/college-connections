import React from 'react';
import ConfettiGenerator from 'confetti-js';

const Confetti = (props) => {

  let style = {
    height: "100vh",
    width: "100vw",
    position: "fixed",
    left: 0,
    top: 0
  }

  React.useEffect(() => {
    const confettiSettings = { target: `my-canvas${props.idx}` };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(confetti.clear, 2000);
    return () => confetti.clear();
  })
  return (
    <div style={style} className="confetti">
      <canvas id={`my-canvas${props.idx}`} style={style}></canvas>
    </div>
  );
}

export default Confetti;