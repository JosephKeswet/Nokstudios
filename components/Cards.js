import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

const Cards = ({img,service,position,ml}) => {
  return (
    <div>
             <motion.div whileHover={{
                scale: 1.05,
                transition: {
                  duration: .2
                }
              }}
              whileTap={{ scale: 0.9 }}
              >        <div className={`w-[376px] h-[456px] ${position} ${ml} cursor-pointer`}>
            <Image src={img} alt='Concept Art Service' className='w-[144px] h-[144px]'/>
            <div className='flex items-center justify-center w-[376px] h-[101px] bg-[#212121] absolute bottom-[-1px] z-10'>
                <div className='flex justify-center items-center '>
                    <h3 className='text-xl leading-[23px] font-medium text-[#FEFEFE]'>{service}</h3>
                    <FontAwesomeIcon icon={faArrowRight} className="text-white w-[68px] h-[68px] pl-[10px]"/>
                </div>
            </div>
        </div>
        </motion.div>

    </div>
  )
}

export default Cards