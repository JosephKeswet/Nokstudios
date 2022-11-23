import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

const Cards = ({img,service,position,ml}) => {
  return (
    <div>
      <Link href='/Book'>
             <motion.div 
             whileHover={{
                scale: 1.05,
                transition: {
                  duration: .2
                }
              }}
              whileTap={{ scale: 0.9 }}
              className={`lg:w-[376px] lg:h-[456px] w-[300px] h-[400px] ${position} ${ml}  cursor-pointer`}>
            <Image src={img} alt='Concept Art Service' className='w-[144px] h-[144px]'/>
            <div className='flex items-center justify-center lg:w-[376px] lg:h-[101px] w-[300px] h-[80px] bg-[#212121] absolute bottom-[-1px] z-10'>
                <div className='flex justify-center items-center lg:w-[334px] lg:h-[68px] w-[224px] h-[45px]  hover:translate-y-1 hover:translate-x-2 transition-all duration-500'>
                    <h3 className='text-sm  lg:text-xl lg:leading-[23px] font-medium text-[#FEFEFE]'>{service}</h3>
                    <FontAwesomeIcon icon={faArrowRight} className="text-white lg:w-[68px] lg:h-[68px]
                    w-[35px] h-[35px] pl-[10px] "/>
                </div>
            </div>
            </motion.div>
        </Link>
    </div>
  )
}

export default Cards