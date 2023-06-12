import React,{useState} from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { FacebookIcon,DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from './Icon'
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({href,title,className = ""})=>{
    
    const router = useRouter();
    
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

        <span className={`h-[1px] inline-block w-0 bg-dark 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}
        
        >
            &nbsp;
        </span>
        </Link>
    );
};

const CustomMobileLink = ({href,title,className = "", toggle})=>{
    
    const router = useRouter();

    const handleClick = () =>{
        toggle();
        router.push(href)
    }
    
    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}

        <span className={`h-[1px] inline-block w-0 bg-light 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`}
        
        >
            &nbsp;
        </span>
        </button>
    );
};

const NavBar = () => {
    const [mode,setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () =>{
        setIsOpen(!isOpen)
    }
     
  return (
    <header
    className='relative z-10 flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light lg:px:16 md:px-12 sm:px-8 lg:px-16 '>

        <button className='flex-col items-center justify-center hidden lg:flex' onClick={handleClick}>
            <span className={`block transition-all duration-300 ease-out bg-dark dark:bg-light h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`block transition-all duration-300 ease-out  bg-dark dark:bg-light h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block transition-all duration-300 ease-out  bg-dark dark:bg-light h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        <div className='flex items-center justify-between w-full lg:hidden'>
        <nav>
            <CustomLink href="/" title="Home" className='mr-4' />
            <CustomLink href="/about" title="About" className='mx-4'/>
            <CustomLink href="/projects" title="Projects" className='mx-4'/>
            <CustomLink href="/articles" title="Articles" className='ml-4'/>
        </nav>

        <nav className='flex flex-wrap items-center justify-center'>
            <motion.a href="https://www.facebook.com/beam.wannasiri/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3 rounded-full bg-light sm:mx-1'><FacebookIcon/></motion.a>
            <motion.a href="https://github.com/jayun-o" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}}  className='w-6 mr-3 rounded-full bg-light dark:bg-dark sm:mx-1'><GithubIcon/></motion.a>
            <motion.a href="https://www.linkedin.com/in/wannasiri-somboon-5887171a3/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1'><LinkedInIcon/></motion.a>
            
            <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`flex items-center justify-center p-1 ml-3 rounded-full
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
            {
                mode === "dark" ?
                <SunIcon className={"fill-dark"} />
                : <MoonIcon className={"fill-dark"}/>
            }
        </button>
        </nav>
        </div>

        {/* mobile */}
        {
            isOpen ?
            <motion.div
            initial={{scale:0 , opacity:0, x:"-50%", y:"-50%"}}
            animate={{scale:1, opacity:1}}
            className='min-w-[70vw] flex-col flex items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 
            bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
            <nav className='flex flex-col items-center justify-center'>
                <CustomMobileLink href="/" title="Home" className='' toggle={handleClick}/>
                <CustomMobileLink href="/about" title="About" className='' toggle={handleClick}/>
                <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick}/>
                <CustomMobileLink href="/articles" title="Articles" className='' toggle={handleClick}/>
            </nav>
    
            <nav className='flex flex-wrap items-center justify-center mt-2'>
                <motion.a href="https://www.facebook.com/beam.wannasiri/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3 sm:mx-1'><FacebookIcon/></motion.a>
                <motion.a href="https://github.com/jayun-o" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3 rounded-full bg-light dark:bg-dark sm:mx-1'><GithubIcon/></motion.a>
                <motion.a href="https://www.linkedin.com/in/wannasiri-somboon-5887171a3/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1'><LinkedInIcon/></motion.a>
                
                <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`flex items-center justify-center p-1 ml-3 rounded-full
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                {
                    mode === "dark" ?
                    <SunIcon className={"fill-dark"} />
                    : <MoonIcon className={"fill-dark"}/>
                }
            </button>
            </nav>
            </motion.div>
            : null
        }

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo/>
        </div>
    </header>
  )
}

export default NavBar