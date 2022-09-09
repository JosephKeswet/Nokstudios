import Image from 'next/image'
import React from 'react'

const Cards = ({img,service,position,ml}) => {
  return (
    <div>
        <div className={`w-[376px] h-[456px] ${position} ${ml}`}>
            <Image src={img} alt='Concept Art Service' className='w-[144px] h-[144px]'/>
            <div className='flex items-center justify-center w-[376px] h-[101px] bg-[#212121] absolute bottom-[-1px] z-10'>
                <div>
                    <h3 className='text-xl leading-[23px] font-medium text-[#FEFEFE]'>{service}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards