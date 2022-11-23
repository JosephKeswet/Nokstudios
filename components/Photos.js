import Image1 from '../Assets/img/Image1.png'
import Image2 from '../Assets/img/Image2.png'
import Image3 from '../Assets/img/Image3.png'
import Image4 from '../Assets/img/Image4.png'
import Image5 from '../Assets/img/Image5.png'
import Image6 from '../Assets/img/Image6.png'
import Image7 from '../Assets/img/Image7.png'
import Image8 from '../Assets/img/Image8.png'
import Image9 from '../Assets/img/Image9.png'
import Image10 from '../Assets/img/Image10.png'
import React from 'react'
import Image from 'next/image'
import Footer from './Footer'

const Photos = () => {
  return (
    <div className='h-screen flex flex-col'>
        <section className='flex flex-wrap justify-center mb-20'>
            <div className='w-[7em] sm:w-[12em] md:w-[15em] lg:w-[20em] xl:w-[30em]'>
                <Image src={Image1} width={500} height={500} objectFit='cover' alt='Gallery image' />
            </div>
            <div className='w-[7em] sm:w-[12em] md:w-[15em] lg:w-[20em] xl:w-[30em]'>
                <Image src={Image2} width={500} height={500} objectFit='cover' alt='Gallery image'/>
            </div>
            <div className='w-[7em] sm:w-[12em] md:w-[15em] lg:w-[20em] xl:w-[30em]'>
                <Image src={Image3} width={500} height={500} objectFit='cover' alt='Gallery image'/>
            </div>
            <div className='w-[7em] sm:w-[12em] md:w-[15em] lg:w-[20em] xl:w-[30em]'>
                <Image src={Image4} width={500} height={500} objectFit='cover' alt='Gallery image'/>
            </div>
            <div className='w-[7em] sm:w-[12em] md:w-[15em] lg:w-[20em] xl:w-[30em]'>
                <Image src={Image5} width={500} height={500} objectFit='cover' alt='Gallery image'/>
            </div>
            <div className='w-[7em] sm:w-[12em] md:w-[15em] lg:w-[20em] xl:w-[30em]'>
                <Image src={Image6} width={500} height={500} objectFit='cover' alt='Gallery image'/>
            </div>
            <div className='w-[7em] sm:w-[12em] md:w-[15em] lg:w-[20em] xl:w-[30em]'>
                <Image src={Image7} width={500} height={500} objectFit='cover' alt='Gallery image'/>
            </div>
            <div className='w-[7em] sm:w-[12em] md:w-[15em] lg:w-[20em] xl:w-[30em]'>
                <Image src={Image8} width={500} height={500} objectFit='cover' alt='Gallery image'/>
            </div>
            <div className='w-[7em] sm:w-[12em] md:w-[15em] lg:w-[20em] xl:w-[30em]'>
                <Image src={Image9} width={500} height={500} objectFit='cover' alt='Gallery image'/>
            </div>
            <div className='w-[7em] sm:w-[12em] md:w-[15em] lg:w-[20em] xl:w-[30em]'>
                <Image src={Image10} width={500} height={500} objectFit='cover' alt='Gallery image'/>
            </div>
            

        </section>
        <div className='mt-auto'>
            <Footer/>
        </div>

    </div>
  )
}

export default Photos