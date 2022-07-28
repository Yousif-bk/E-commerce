import React from 'react'

function Button({ bgColor, color, size, bgHoverColor, width, text, borderRadius,onClick }) {
  return (
    <button type='button'
      onClick={onClick}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}>{text}</button>
  )
}

export default Button