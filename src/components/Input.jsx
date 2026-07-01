import React from 'react'

const Input = (
  {type,name,placeholder,value,onChange,disabled,required,style,}
) => {

  return <input 
    type={type}
    className={style} 
    placeholder={placeholder} 
    onChange={onChange}
    value={value}
    name={name}
    disabled={disabled}
    required={required}
  />;

}

export default Input
