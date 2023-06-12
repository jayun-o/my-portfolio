import React, { useEffect,useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import profilePic from '../../public/images/profile/30496.png'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'



const AnimatedNumbers = ({value}) =>{
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue,{duration:3000})
const isInview = useInView(ref,{once:true});


useEffect(()=>{
    if(isInview){
        motionValue.set(value);
    }
},[isInview,value, motionValue])

useEffect(()=>{
    springValue.on("change", (latest)=>{
        if(ref.current && latest.toFixed(0)<=value){
            ref.current.textContent = latest.toFixed(0)
        }
    })
},[springValue,isInview,value])

    return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
        <Head>
            <title>Wannabe | About Page</title>
            <meta name="description" content='my portfolio'/>
        </Head>
        <TransitionEffect/>
        <main className='flex flex-col items-center justify-center w-full dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="About me!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>
                            Biography
                        </h2>
                        <p className='my-4 font-medium'>
                        Hi, I&apos;m Beam Wannasiri, a web developer with a passion for find new opportunity, technology,functional and user-centered digital experiences.
                        </p>

                        <p className='my-4 font-medium'>
                            I&apos;m Fresh graduated student at Thammasat University with a degree in Bachelor of Engineering in Software Engineering
                        </p> 

                        <p className='my-4 font-medium'>
                            Courses: Software Process, Software Testing and Quality Assurance, Cloud Computing, Advanced System Administration, Database Systems, Electronic Commerce Engineering, Web Application Developments
                        </p>
                    </div>
                    <div className='relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 '>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
                        '/>
                            <Image src={profilePic} alt="wannabe" className='w-full h-auto rounded-2xl'
                            priority
                            sizes="(max-width: 768px) 100vw, 
                            (max-width: 1200px) 50vw, 
                            50vw"/>
                    </div>
                    <div className='flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={6}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Programming languegues</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={15}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={4}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of developer experiance</h2>
                        </div>
                    </div>
                </div>
                <Skills/>
                <Experience/>
                <Education/>

            </Layout>
        </main>
    
    </>
  )
}

export default about