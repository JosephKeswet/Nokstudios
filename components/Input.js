import React from 'react'

const Input = ({inputType,width,height,placeholder,paddingLeft,marginBottom,padding_x,initialValue}) => {
  return (
    <div>
        <input type={inputType} value={initialValue} className={`${width} ${height} ${paddingLeft} ${marginBottom} ${padding_x} `} placeholder={placeholder} />
    </div>
  )
}

export default Input