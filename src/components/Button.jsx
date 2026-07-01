import React from 'react'

const Button = ({type, style, text, onClick}) => {
  return (
    <button type={type} className={style} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button
