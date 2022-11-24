import React from 'react'

const Input = ({inputType,width,height,placeholder,paddingLeft,marginBottom,padding_x,initialValue,name}) => {
  return (
    <div>
        <input type={inputType} value={initialValue} className={`${width} ${height} ${paddingLeft} ${marginBottom} ${padding_x} `} placeholder={placeholder} name={name} />
    </div>
  )
}

export default Input