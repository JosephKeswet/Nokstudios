import React from 'react'

const Input = ({inputType,width,height,placeholder,paddingLeft,marginBottom}) => {
  return (
    <div>
        <input type={inputType} className={`${width} ${height} ${paddingLeft} ${marginBottom} `} placeholder={placeholder}/>
    </div>
  )
}

export default Input