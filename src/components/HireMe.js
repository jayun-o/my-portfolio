import React from 'react'
import { CircularText } from './Icon'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed flex items-center justify-center overflow-hidden left-4 bottom-4 md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0 animate-spin-slow'>
      <div className='relative flex items-center justify-center w-48 h-auto md:w-24'>
        <CircularText className={"fill-dark dark:fill-light"}/>
        <Link href="mailto:typ.pharita@gmail.com" 
        className='absolute flex items-center justify-center w-20 h-20 font-semibold -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-md left-1/2 top-1/2 bg-dark text-light border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light 
        md:w-12 md:h-12 md:text-[10px]
        '>
          Hire me
        </Link>
      </div>
    </div>
  )
}

export default HireMe