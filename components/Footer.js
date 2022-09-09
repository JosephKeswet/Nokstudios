import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook,faInstagram,faPinterest,faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  return (
    <div>
        <main className='bg-[#0F0E0E]'>
            <div className='flex items-center justify-evenly h-[236px]'>
                <h2 className='text-xl text-white'>Contact Us</h2>
                
                {/* This contains the social icons */}
                <ul className="flex items-center gap-[70px] text-[#DC5539] text-4xl">
                    <li><FontAwesomeIcon icon={faSquareFacebook} /></li>
                    <li><FontAwesomeIcon icon={faInstagram}/></li>
                    <li><FontAwesomeIcon icon={faYoutube}/></li>
                    <li><FontAwesomeIcon icon={faPinterest}/></li>
                    <li><FontAwesomeIcon icon={faTwitter}/></li>
                </ul>

                <h2 className='text-xl text-white'>About the studio</h2>
            </div>

            <div className='flex justify-center items-center pb-[24px]'>
                <h2 className='text-white text-xl leading-[24px] font-normal'>NOKANIMATIONSTUDIOS@2022</h2>
            </div>
        </main>
    </div>
  )
}

export default Footer