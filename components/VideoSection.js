import React from 'react'
import Footer from './Footer'
import Videos from './Videos'

const VideoSection = () => {
  return (
    <div>
        <section className='bg-[#252525] w-full h-auto'>
            <main className='flex flex-wrap justify-center gap-[2em] sm:gap-[4em] lg:gap-[6em] pt-12 pb-20'>
                <div>
                    <Videos url='https://www.youtube.com/watch?v=ysz5S6PUM-U' videoName='Land of Fury'/>
                </div>
                <div>
                    <Videos url='https://www.youtube.com/watch?v=ysz5S6PUM-U' videoName='Land of Fury'/>
                </div>
                <div>
                    <Videos url='https://www.youtube.com/watch?v=ysz5S6PUM-U' videoName='Land of Fury'/>
                </div>
                <div>
                    <Videos url='https://www.youtube.com/watch?v=ysz5S6PUM-U' videoName='Land of Fury'/>
                </div>
                <div>
                    <Videos url='https://www.youtube.com/watch?v=ysz5S6PUM-U' videoName='Land of Fury'/>
                </div>
                <div>
                    <Videos url='https://www.youtube.com/watch?v=ysz5S6PUM-U' videoName='Land of Fury'/>
                </div>
            </main>
            <div className='sm:mt-6 md:mt-10 lg:mt-14 xl:mt-20'>
                <Footer/>
            </div>
        </section> 
    </div>
  )
}

export default VideoSection