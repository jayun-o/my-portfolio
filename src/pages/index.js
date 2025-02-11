import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/30495.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icon'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
      </Head>
      <TransitionEffect/>
      <main className='flex items-center w-full min-h-screen text-dark dark:text-light '>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="Portfolio" className='w-full h-auto lg:hidden md:inline-block md:w-full'
              priority
              sizes="(max-width: 768px) 
              100vw, (max-width: 1200px) 50vw, 
              33vw"

              />
            </div>
            <div className='flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center'>
              <AnimatedText text="Hi, I'm Typhoon (Pharita)" className='!text-6xl !text-left xl:text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <div className='my-4 text-base font-medium md:text-sm sm:text-xs self-start	'>As a Frontend developer, Mobile developer(Kotlin/Flutter), Finding a new opportunity work</div>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/PHARITA SOMBOON resume.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent
                 dark:bg-light dark:text-dark hover:border-dark  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                 md:p-2 md:px-4 md:text-base
                 '
                download={true}>Resume <LinkArrow className={"w-6 ml-1"}/></Link>
                <Link href="mailto:typ.pharita@gmail.com" target={"_blank"} className='ml-4 text-lg font-medium underline capitalize text-dark dark:text-light md:text-base '>Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}
