import React from 'react'

const Button = ({btnText,bgColor,height,width,fontSize,lineHeight,fontWeight,textColor}) => {
  return (
    <div>
        <button className={`${bgColor} ${width} ${height} ${fontSize} ${lineHeight} ${fontWeight} ${textColor}`}>{btnText}</button>
    </div>
  )
}

export default Button