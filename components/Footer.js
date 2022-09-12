import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook,faInstagram,faPinterest,faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import {motion} from 'framer-motion'



const Footer = () => {
  return (
    <div>
        <main className='bg-[#0F0E0E]'>
            <div className='flex items-center justify-evenly h-[236px]'>
                <Link href="/Contact">
                    <h2 className='text-xl text-white cursor-pointer hover:text-gray-300'>Contact Us</h2>
                </Link>
                
                {/* This contains the social icons */}
                <ul className="flex items-center gap-[70px] text-[#DC5539] text-4xl">
                    <Link href="https://web.facebook.com/?_rdc=1&_rdr">
                        <motion.li
                        whileTap={{
                            scale: 0.7
                        }}
                        ><FontAwesomeIcon icon={faSquareFacebook}  className='cursor-pointer hover:text-red-300' /></motion.li>
                    </Link>

                    <Link href='#'>
                    <motion.li
                     whileTap={{
                        scale: 0.7
                    }}
                    ><FontAwesomeIcon icon={faInstagram} className='cursor-pointer hover:text-red-300'/></motion.li>
                    </Link>

                    <Link href="#">
                    <motion.li
                       whileTap={{
                        scale: 0.7
                    }}
                    ><FontAwesomeIcon icon={faYoutube} className='cursor-pointer hover:text-red-300'/></motion.li>
                    </Link>

                    <Link href="#">
                    <motion.li
                       whileTap={{
                        scale: 0.7
                    }}
                    ><FontAwesomeIcon icon={faPinterest} className='cursor-pointer hover:text-red-300'/></motion.li>
                    </Link>

                    <Link href="#">
                    <motion.li
                       whileTap={{
                        scale: 0.7
                    }}
                    ><FontAwesomeIcon icon={faTwitter} className='cursor-pointer hover:text-red-300'/></motion.li>
                    </Link>
                </ul>

                <h2 className='text-xl text-white cursor-pointer hover:text-gray-300'>About the studio</h2>
            </div>

            <div className='flex justify-center items-center pb-[24px]'>
                <h2 className='text-white text-xl leading-[24px] font-normal '>NOKANIMATIONSTUDIOS@2022</h2>
            </div>
        </main>
    </div>
  )
}

export default Footer