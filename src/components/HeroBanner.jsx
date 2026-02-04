import { motion } from 'framer-motion'
import Wrapper from './Wrapper'
import gmailIcon from '../assets/email-icon.png'
import { scrollTo } from '../helper'
import resumePdf from "../assets/Rohit Chand [Software Developer].pdf";

const HeroBanner = () => {
  return (
    <header
      id='hero'
      className='w-full min-h-screen relative bg-offwhite flex items-center'
    >
      <Wrapper>
        <motion.nav
          className='flex items-center justify-between py-6 md:py-8 absolute top-0 left-0 right-0 w-full max-w-[1400px] px-5 md:px-10 lg:px-16 mx-auto z-50'
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href='mailto:rohitchand.work@gmail.com'
            className='hidden sm:flex items-center gap-2 text-xs md:text-sm text-gray hover:text-black transition-colors duration-300 whitespace-nowrap'
          >
            <img src={gmailIcon} alt='Email icon' className='w-4 h-4 opacity-60 flex-shrink-0' aria-hidden="true" />
            <span className="hidden xl:inline">rohitchand.work@gmail.com</span>
            <span className="xl:hidden hidden md:inline">Email</span>
          </a>
          <a
            href='mailto:rohitchand.work@gmail.com'
            className='sm:hidden flex items-center gap-1.5 text-xs text-gray hover:text-black transition-colors duration-300'
          >
            <img src={gmailIcon} alt='Email' className='w-4 h-4 opacity-60' />
          </a>

          <ul className='flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 text-xs md:text-sm items-center'>
            <li
              className='cursor-pointer text-gray hover:text-black transition-colors duration-300 whitespace-nowrap'
              onClick={() => scrollTo('about')}
            >
              About
            </li>
            <li
              className='cursor-pointer text-gray hover:text-black transition-colors duration-300 whitespace-nowrap hidden sm:block'
              onClick={() => scrollTo('experience')}
            >
              Experience
            </li>
            <li
              className='cursor-pointer text-gray hover:text-black transition-colors duration-300 whitespace-nowrap'
              onClick={() => scrollTo('skills')}
            >
              Skills
            </li>
            <li
              className='cursor-pointer text-gray hover:text-black transition-colors duration-300 whitespace-nowrap'
              onClick={() => scrollTo('work')}
            >
              Projects
            </li>
            <li
              className='cursor-pointer text-gray hover:text-black transition-colors duration-300 whitespace-nowrap hidden md:block'
              onClick={() => scrollTo('contact')}
            >
              Contact
            </li>
            <li
              className='cursor-pointer text-gray hover:text-black transition-colors duration-300 whitespace-nowrap hidden lg:block'
              onClick={() => window.open(resumePdf, '_blank')}
            >
              Resume
            </li>
          </ul>
        </motion.nav>

        <div className='w-full max-w-5xl mx-auto pt-20 md:pt-24 lg:pt-0 px-5 md:px-0'>
          <motion.div
            className='mb-8 md:mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium leading-[1.1] text-black mb-6 md:mb-8'>
              Software
              <br />
              Developer
            </h1>
          </motion.div>

          <motion.div
            className='mb-12 md:mb-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className='text-base md:text-lg lg:text-xl text-gray leading-relaxed max-w-2xl'>
              Hi, I'm <span className='text-black font-medium'>Rohit Chand</span>. 
              A full-stack developer building scalable applications with modern technologies. 
              Currently working at CodeFeast, I specialize in MERN stack development, 
              microservices architecture, and performance optimization.
            </p>
          </motion.div>

          <motion.div
            className='flex flex-wrap gap-8 md:gap-12 lg:gap-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className='text-4xl md:text-5xl lg:text-6xl font-light text-black mb-2'>180K+</div>
              <div className='text-xs md:text-sm text-gray uppercase tracking-wider'>
                Event Registrations
              </div>
            </div>
            <div>
              <div className='text-4xl md:text-5xl lg:text-6xl font-light text-black mb-2'>50+</div>
              <div className='text-xs md:text-sm text-gray uppercase tracking-wider'>
                Projects
              </div>
            </div>
            <div>
              <div className='text-4xl md:text-5xl lg:text-6xl font-light text-black mb-2'>2</div>
              <div className='text-xs md:text-sm text-gray uppercase tracking-wider'>
                Internships
              </div>
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </header>
  )
}

export default HeroBanner
