import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>

      <div
        className='flex justify-between bg-white max-w-6xl'
      >
        {/* Left */}
        <div
          className='relative hidden lg:inline-grid w-24 cursor-pointer'
        >
          <Image 
            src='https://links.papareact.com/ocw'
            fill
            style={{objectFit: 'contain'}}
          />
        </div>

        <div
          className='relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer'
        >
          <Image 
            src='https://links.papareact.com/jjm'
            fill
            style={{objectFit: 'contain'}}
          />
        </div>

        <h1>login</h1>

        {/* Middle */}

        {/* Right */}


      </div>
    </div>
  )
}

export default Header
