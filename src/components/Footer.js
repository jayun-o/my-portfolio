import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base '>
        <Layout className='flex items-center justify-between py-8 lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserverd.</span>
            <div className='flex items-center lg:py-2'>
                Build With <span className='px-1 text-2xl text-primary dark:text-primaryDark'>&#9825;</span>
                by&nbsp;<Link href="/" className='underline underline-offset-2'>typ</Link>
            </div>
            <Link  href='' target={"_blank"} className='underline underline-offset-2'>typ.pharita@gmail.com</Link>
        </Layout>
    </footer>
  )
}

export default Footer