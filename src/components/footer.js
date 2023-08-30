import React from 'react'
import Image from 'next/image'

const footer = () => {
  return (
    <div className='flex justify-center -top-[5381px] left-[15560px]'>
      <Image 
        src='/images/footer.png'
        width={1920}
        height={509}
        alt='Footer'
      /> 
    </div>
  )
}

export default footer
