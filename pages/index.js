import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import logoWhite from '../Assets/logos/Nok-Logo white 1.svg'
import Pen from '../Assets/logos/Pen.png'
import Angel from '../Assets/img/Angel.svg'
import StreetBoy from '../Assets/img/StreetBoy.svg'
import BoxIcon from '../Assets/logos/BoxIcon.png'
import ConceptArt from '../Assets/img/ConceptArt.png'
import Cards from '../components/Cards'
import Button from '../components/Button'
import Footer from '../components/Footer'



export default function Home() {
  return (
    <div>
      {/* This is my nav */}
      <div className='bg-[url("https://64.media.tumblr.com/64e5d0c2dce58a311067b5bee5933ac8/8cd937f7baab925b-08/s540x810/7f3913654c7f40dd5089bea3c4a100800a7beb9b.gif")] h-[781px] bg-cover'>
      <NavBar logo={logoWhite} color="text-white" paddingTop="pt-[25px]"/>
      </div>

      {/* What we do section */}
    <section className='mx-[100px]'>
        <h1 className='text-center text-4xl mt-[17px] mb-[80px]'>What we do</h1>
        <main className='relative h-[1715px]'>

          {/* Angel container */}
            <div className='flex gap-[62px]'>
              <div>
                <p className='text-[28px] leading-[40px] w-[643px] font-normal pb-[20px]'>From the pen strokes to the mouse clicks, we design and create with an artistic touch.</p>
                <Image src={Pen} alt='Pen Icon' className='w-[144px] h-[144px]'/>
              </div>
                <Image src={Angel} alt='Angel Art' className='w-[641px] h-[906px]'/>
            </div>


          {/*Street boy container  */}
            <div className='flex items-end gap-[62px] absolute bottom-[5px]'>
              <Image src={StreetBoy} alt='Angel Art' className='w-[641px] h-[1162px]'/>
              <div>
                  <Image src={BoxIcon} alt='Box Icon' className='w-[144px] h-[144px]'/>
                  <p className='text-[28px] leading-[40px] w-[643px] font-normal pb-[20px]'>We bring works to life make imaginations a reality. Watch your dreams unfold and make worlds of your own.</p>
              </div>
            </div>
            
        </main>

      </section>

      {/* Our services section */}
      <section>
        <h1 className='text-center text-4xl mt-[200px] mb-[200px]'>How may we be of service?</h1>
        <main className='flex flex-wrap gap-[90px] mx-[96px]'>
          {/* Cards for each service */}
          <Cards img={ConceptArt} service="CONCEPT ARTS DESIGN" position="relative"/>
          <Cards img={ConceptArt} service="CONCEPT ARTS DESIGN" position="relative"/>
          <Cards img={ConceptArt} service="CONCEPT ARTS DESIGN" position="relative"/>
          <Cards img={ConceptArt} service="CONCEPT ARTS DESIGN" position="relative" ml="ml-[470px]"/>
        </main>
      </section>
    {/* This section houses the BOOK NOW Button */}
      <section className='flex justify-center items-center mt-[180px] mb-[265px]'>
          <Button btnText="BOOK NOW" bgColor="bg-[#DC5539]" fontSize="text-[24px]" width="w-[418px]" height="h-[86px]" textColor="text-white" lineHeight="leading-[28px]" fontWeight="font-bold"/>
      </section>

      {/* This contains the footer */}

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
