import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({position,company, companyLink, time, address, work}) =>
{
  const ref = useRef(null)
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='text-2xl font-bold capitalize xs:text-lg sm:text-xl'>{position}&nbsp;<a href={companyLink}
                target="_blank"
                className='text-primary capitailze dark:text-primaryDark'
                >@{company}</a></h3>
                <span className='font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm '>
                  {time} | {address}
                </span>
                <p className='w-full font-medium md:text-sm'>
                  {work}
                </p>
            </motion.div>
          </li>
}
const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset:["start end", "center start"]
    }
  )

  return (
    <div className='my-64'>
        <h2 className='w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16' >
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

          <motion.div
          style={{scaleY: scrollYProgress}}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          ' />
          <ul className='flex flex-col items-start justify-between w-full ml-4 xs:ml-2'>
              <Details 
              position="Software Developer" company="NSTDA"
              companyLink="https://drive.google.com/file/d/1HhTies5LNQZ-fmV8yXQ3B0saic2poITR/view?usp=sharing"
              time= "June - July 2021 (2 months)" address="Pathum Thani, TH"
              work="
              Software development team at the summer internship company working in an Agile Environment, during the COVID-19 pandemic in Thailand, devised a solution by programming a Python-controlled robot, built in their lab, to deliver items to COVID patients using a PS4 controller and able to set up routes, Help reducing the risk of the spread of the virus
              and learn about Marvelmind indoor positioning system to set path for autonomous robots, drones, vehicles and humans(eg., building, factory.)
              "
              />
          </ul>
        </div>
    </div>
  )
}

export default Experience