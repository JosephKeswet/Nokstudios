import { useRouter } from 'next/router'
import React from 'react'

const Button = ({btnText,bgColor,height,width,fontSize,lineHeight,fontWeight,textColor,routeFunc}) => {
  const router = useRouter()

  return (
    <div>
        <button className={`${bgColor} ${width} ${height} ${fontSize} ${lineHeight} ${fontWeight}
         ${textColor}`}          
         onClick={routeFunc}>{btnText}</button>
    </div>
  )
}

export default Button