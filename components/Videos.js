import React from 'react'
import Footer from './Footer'
import ReactPlayer from 'react-player/youtube'

const Videos = ({url,videoName}) => {
  return (
    <div>
      <main >
        <div className='w-[20em] h-[20em] sm:w-[20em] xl:w-[35em]'>
          <div className="player-wrapper">
            <ReactPlayer url={url}
            className="react-player"
            width="100%"
            height="100%"
            />
          </div>
          <h1 className='text-center text-[20px] font-normal leading-6 text-white mt-[25px]'>{videoName}</h1>
        </div>
      </main>
  
    </div>
  )
}

export default Videos



// Only loads the YouTube player