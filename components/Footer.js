import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook,faInstagram,faPinterest,faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import {motion} from 'framer-motion'



const Footer = () => {
  return (
    <div>
        <main className='bg-[#0F0E0E] w-full h-full' >
            <div className='flex items-center px-[10px] justify-between gap-[20px] md:justify-between lg:h-[236px] h-[91px]'>
                <Link href="/Contact">
                    <h2 className='text-[12px] md:text-xl text-white cursor-pointer hover:text-gray-300'>Contact Us</h2>
                </Link>
                
                {/* This contains the social icons */}
                <ul className="flex items-center lg:gap-[70px] gap-[12px] text-[6px] text-[#DC5539] lg:text-4xl">
                    <Link href="https://www.facebook.com/nokstudios">
                        <motion.li
                        whileTap={{
                            scale: 0.7
                        }}
                        ><FontAwesomeIcon icon={faSquareFacebook}  className='cursor-pointer hover:text-red-300 w-[19px] h-[19px] md:w-[36px] md:h-[36px]' /></motion.li>
                    </Link>

                    <Link href='https://www.instagram.com/nokanimationstudios/'>
                    <motion.li
                     whileTap={{
                        scale: 0.7
                    }}
                    ><FontAwesomeIcon icon={faInstagram} className='cursor-pointer hover:text-red-300 w-[19px] h-[19px] md:w-[36px] md:h-[36px]'/></motion.li>
                    </Link>

                    <Link href="https://www.youtube.com/@nokstudio9909">
                    <motion.li
                       whileTap={{
                        scale: 0.7
                    }}
                    ><FontAwesomeIcon icon={faYoutube} className='cursor-pointer hover:text-red-300 w-[19px] h-[19px] md:w-[36px] md:h-[36px]'/></motion.li>
                    </Link>

                    <Link href="https://www.linkedin.com/company/nok-animation-studios/">
                    <motion.li
                       whileTap={{
                        scale: 0.7
                    }}
                    ><FontAwesomeIcon icon={faLinkedin} className='cursor-pointer hover:text-red-300 w-[19px] h-[19px] md:w-[36px] md:h-[36px]'/></motion.li>
                    </Link>

                    <Link href="#">
                    <motion.li
                       whileTap={{
                        scale: 0.7
                    }}
                    ><FontAwesomeIcon icon={faTwitter} className='cursor-pointer hover:text-red-300 w-[19px] h-[19px] md:w-[36px] md:h-[36px]'/></motion.li>
                    </Link>
                </ul>
                
                <Link href="/About">
                    <h2 className='text-[12px] md:text-xl text-white cursor-pointer hover:text-gray-300 '>About the studio</h2>
                </Link>
            </div>

            <div className='flex justify-center items-center pb-[24px]'>
                <h2 className='text-white text-[12px] md:text-xl leading-[24px] font-normal '>NOKANIMATIONSTUDIOS@2022</h2>
            </div>
        </main>
    </div>
  )
}

export default Footer