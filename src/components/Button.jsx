import React from 'react'

function Button({ bgColor, color, size, bgHoverColor, width, text, borderRadius }) {
  return (
    <button type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}>{text}</button>
  )
}

export default Button