import React from 'react';
// import './ToolTip.css';

function ToolTip(props) {
  const gifUrl = props.details.gif;
  const metUrl = 'images/'.concat(props.details.filename);
  const { xpos, ypos } = props.details;
//   const xpos = props.details.xpos; #same as above
//   const ypos = props.details.ypos; #same as above

  console.log(gifUrl)
  console.log(metUrl)

  return (
    <div
        style={{
            position: 'absolute',
            top: `${ypos}px`,
            left: `${xpos}px`,
            maxWidth:'200px'
        }}
        className="Overlay"
    >
      <img src={`${metUrl}`}/>
      <img src={`${gifUrl}`}/>
    </div>
  );
}

export default ToolTip;
