import React,{useRef} from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/articles/articles1.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import { useMotionValue } from 'framer-motion'


const FramerImage = motion(Image);

const MovingImg = ({title,img,link})=>{
    const x =useMotionValue(0);
    const y =useMotionValue(0);
    const imgRef = useRef(null);

    //show img
    function handleMouse (event){
        imgRef.current.style.display="inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    //hide img
    //console.log(event.pageX)
    function handleMouseLeave (event){
        imgRef.current.style.display="none";
        x.set(0);
        y.set(0);
    }


    return(
        <Link href={link} target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className='text-xl font-semibold capitalize hover:underline'>{title}</h2>
            <FramerImage 
            style={{x:x, y,y}}
            initial={{opacity:0}}
            whileInView={{opacity:1,transition:{duration:0.2}}}
            ref={imgRef}src={img} alt={title} className='absolute z-10 hidden h-auto rounded-lg w-96 md:!hidden'
            priority
                sizes="(max-width: 768px) 
                100vw, (max-width: 1200px) 50vw, 
                50vw"
            />
        </Link>
    )

}

const Article=({img, title, date, link})=>{
    return(
        <motion.li
        initial={{y:200}}
        whileInView={{y:0,transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative flex items-center justify-between w-full p-4 py-6 my-4 border border-b-4 border-r-4 border-solid rounded-xl bg-light text-dark first:mt-0 border-dark dark:border-light dark:bg-dark dark:text-light sm:flex-col '>
            <MovingImg title={title} img={img} link={link}/>
            <span className='pl-4 font-semibold text-primary dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )

}

const FeaturedArticle = ({img, title,time, summary, link})=>{
    return(
        <li className='relative w-full col-span-1 p-4 border border-solid bg-light border-dark rounded-2xl dark:bg-dark dark:text-light dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>
            <Link href={link} target="_blank" 
            className='inline-block w-full overflow-hidden rounded-lg cursor-pointer '>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='my-2 mt-4 text-2xl font-bold capitalize hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='mb-2 text-sm'>{summary}</p>
            <span className='font-semibold text-primary dark:text-primaryDark'>{time}</span>
        </li>
    )
}
const articles = () => {
  return (
    <>
        <Head>
            <title>Wannabe | About Page</title>
            <meta name="description" content='my portfolio'/>
        </Head>
        <TransitionEffect/>
        <main className='flex flex-col items-center justify-between w-full mb-16 overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="If wanna share, Let's write" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl'/>
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedArticle 
                    title='Object-oriented programming คืออะไร? [Part1]'
                    summary='Object-oriented programming หรือ โปรแกรมเชิงวัตถุ เปรียบเหมือนการ เก็บ/wrapping ข้อมูล(state/behavior) นั่นเอง Classes / Objects คืออะไร? แตกต่างกันอย่างไร? Classes = ตัวกำหนดโครงสร้างของข้อมูล
                    Objects = การนำโครงสร้างข้อมูลของ Class มาทำ special bundles  
                    องค์ประกอบของ Classes / Objects
                    State(fields) เป็นการบ่งบอกคุณลักษณะของ class/object
                    Behavior(Method) เป็นการบอกพฤติกรรมหรือการกระทำของ class/object'
                    time= 'Oct 23, 2022'
                    link="https://medium.com/@beam.wannasiri/object-oriented-programming-คืออะไร-part1-cdb6227ebf5"
                    img={article1}
                    />
                    <FeaturedArticle 
                    title='Object-oriented programming คืออะไร? [Part1]'
                    summary='Object-oriented programming หรือ โปรแกรมเชิงวัตถุ เปรียบเหมือนการ เก็บ/wrapping ข้อมูล(state/behavior) นั่นเอง Classes / Objects คืออะไร? แตกต่างกันอย่างไร? Classes = ตัวกำหนดโครงสร้างของข้อมูล
                    Objects = การนำโครงสร้างข้อมูลของ Class มาทำ special bundles  
                    องค์ประกอบของ Classes / Objects
                    State(fields) เป็นการบ่งบอกคุณลักษณะของ class/object
                    Behavior(Method) เป็นการบอกพฤติกรรมหรือการกระทำของ class/object'
                    time= 'Oct 23, 2022'
                    link="https://medium.com/@beam.wannasiri/object-oriented-programming-คืออะไร-part1-cdb6227ebf5"
                    img={article1}
                    />
                </ul>
                <h2 className='w-full my-16 mt-32 text-4xl font-bold text-center'>All articles</h2>
                <ul>
                    <Article
                    title="Object-oriented programming คืออะไร? [Part1]"
                    date="Oct 23, 2022"
                    link="https://medium.com/@beam.wannasiri/object-oriented-programming-คืออะไร-part1-cdb6227ebf5"
                    img={article1}
                    />
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles