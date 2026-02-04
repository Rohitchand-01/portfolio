import React from 'react'
import Wrapper from './Wrapper'
import gmailIcon from '../assets/email-icon.png'
import { scrollTo } from '../helper'

const Footer = () => {
  return (
    <div className='bg-offwhite border-t border-lightgray'>
      <Wrapper>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 py-8 md:py-12 text-sm'>
          <a
            href='mailto:rohitchand.work@gmail.com'
            className='flex items-center gap-2 text-gray hover:text-black transition-colors duration-300'
          >
            <img src={gmailIcon} alt='Email' className='w-4 h-4 opacity-60' />
            <span>rohitchand.work@gmail.com</span>
          </a>
          <ul className='flex gap-6 md:gap-8'>
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
          </ul>
        </div>
      </Wrapper>
    </div>
  )
}

export default Footer
