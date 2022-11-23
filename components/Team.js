import React from 'react'

const Team = ({bgImg}) => {
  return (
    <div>
           <section >
          {/* This is where we display the images of each team member */}
            <main className='pt-10'>
              <div className='pentagon_b cursor-pointer'>
                <div className={`pentagon text-transparent ${bgImg}`}>
                    <h1 className='mb-[24px] text-center text-white text-[12px] font-semibold leading-4 w-[109px] h-[16px]'>Lead Character artist</h1>
                </div>
              </div>
            </main>

      </section>
    </div>
  )
}

export default Team