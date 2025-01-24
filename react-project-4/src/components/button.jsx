import React from 'react'

const button = (props) => {
  return (
    <div>
        {props.children}
        {/* onClick ka C capital */}
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    </div>
  )
}

export default button