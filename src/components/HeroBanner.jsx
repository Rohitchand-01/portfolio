import { motion } from 'framer-motion'
import Wrapper from './Wrapper'
import gmailIcon from '../assets/email-icon.png'
import { scrollTo } from '../helper'
import resumePdf from "../assets/Rohit Chand [Software Developer].pdf";

const HeroBanner = () => {
  return (
    <div
      id='hero'
      className='w-full min-h-screen relative bg-offwhite flex items-center'
    >
      <Wrapper>
        <motion.nav
          className='hidden md:flex items-center justify-between py-8 absolute top-0 left-0 right-0 max-w-[1400px] px-5 md:px-10 lg:px-16 mx-auto z-50'
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href='mailto:rohitchand.work@gmail.com'
            className='flex items-center gap-2 text-sm text-gray hover:text-black transition-colors duration-300'
          >
            <img src={gmailIcon} alt='Email' className='w-4 h-4 opacity-60' />
            <span>rohitchand.work@gmail.com</span>
          </a>

          <ul className='flex gap-6 md:gap-8 text-sm'>
            <li
              className='cursor-pointer text-gray hover:text-black transition-colors duration-300'
              onClick={() => scrollTo('about')}
            >
              About
            </li>
            <li
              className='cursor-pointer text-gray hover:text-black transition-colors duration-300'
              onClick={() => scrollTo('experience')}
            >
              Experience
            </li>
            <li
              className='cursor-pointer text-gray hover:text-black transition-colors duration-300'
              onClick={() => scrollTo('skills')}
            >
              Skills
            </li>
            <li
              className='cursor-pointer text-gray hover:text-black transition-colors duration-300'
              onClick={() => scrollTo('work')}
            >
              Projects
            </li>
            <li
              className='cursor-pointer text-gray hover:text-black transition-colors duration-300'
              onClick={() => scrollTo('contact')}
            >
              Contact
            </li>
            <li
              className='cursor-pointer text-gray hover:text-black transition-colors duration-300'
              onClick={() => window.open(resumePdf, '_blank')}
            >
              Resume
            </li>
          </ul>
        </motion.nav>

        <div className='w-full max-w-5xl mx-auto pt-24 md:pt-0'>
          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className='text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium leading-[1.1] text-black mb-8'>
              Software
              <br />
              Developer
            </h1>
          </motion.div>

          <motion.div
            className='mb-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className='text-lg md:text-xl text-gray leading-relaxed max-w-2xl'>
              Hi, I'm <span className='text-black font-medium'>Rohit Chand</span>. 
              A full-stack developer building scalable applications with modern technologies. 
              Currently working at CodeFeast, I specialize in MERN stack development, 
              microservices architecture, and performance optimization.
            </p>
          </motion.div>

          <motion.div
            className='flex flex-wrap gap-12 md:gap-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className='text-5xl md:text-6xl font-light text-black mb-2'>180K+</div>
              <div className='text-sm text-gray uppercase tracking-wider'>
                Event Registrations
              </div>
            </div>
            <div>
              <div className='text-5xl md:text-6xl font-light text-black mb-2'>50+</div>
              <div className='text-sm text-gray uppercase tracking-wider'>
                Projects
              </div>
            </div>
            <div>
              <div className='text-5xl md:text-6xl font-light text-black mb-2'>2</div>
              <div className='text-sm text-gray uppercase tracking-wider'>
                Internships
              </div>
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </div>
  )
}

export default HeroBanner
