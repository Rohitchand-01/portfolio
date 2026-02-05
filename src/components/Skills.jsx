import React from 'react'
import Wrapper from './Wrapper'
import SkillIcon from './SkillIcon'
import Portfolio from './Portfolio'
import Achievements from './Achievements'
import Div from './Div'
import { skillCategories } from '../data'

import sk1 from '../assets/sk-1.png'
import sk2 from '../assets/sk-2.png'
import sk3 from '../assets/sk-3.png'
import sk4 from '../assets/sk-4.png'
import sk5 from '../assets/sk-5.png'
import sk6 from '../assets/sk-6.png'
import sk7 from '../assets/sk-7.png'
import sk8 from '../assets/sk-8.png'
import sk9 from '../assets/sk-9.png'
import sk10 from '../assets/sk-10.png'
import sk11 from '../assets/sk-11.png'
import sk12 from '../assets/sk-12.png'
import sk13 from '../assets/sk-13.png'
import sk14 from '../assets/sk-14.png'
import sk15 from '../assets/sk-15.png'
import sk16 from '../assets/sk-16.png'
import sk17 from '../assets/sk-17.png'
import sk18 from '../assets/sk-18.png'
import sk19 from '../assets/sk-19.png'
import sk20 from '../assets/sk-20.jpg'
import sk21 from '../assets/sk-21.png'

const Skills = () => {
  return (
    <section
      id='skills'
      className='bg-offwhite py-20 md:py-32 lg:py-40 relative'
      aria-label="Technical Skills and Expertise"
    >
      <Wrapper>
        <Div className='mb-12 md:mb-16 lg:mb-20 px-5 md:px-0'>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-black mb-4">
            Skills
          </h2>
          <div className="w-16 h-px bg-black"></div>
        </Div>

        <div className='mb-16 md:mb-24 lg:mb-32'>
          <Div className='mb-12 md:mb-16 lg:mb-20 px-5 md:px-0'>
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-display font-medium text-black mb-4">
              Technical Expertise
            </h3>
            <div className="w-16 h-px bg-black"></div>
          </Div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-8 md:gap-y-12 lg:gap-y-16 px-5 md:px-0'>
            {skillCategories.map((category, index) => (
              <Div key={index} className="space-y-4 md:space-y-5">
                <h4 className="text-sm md:text-base lg:text-lg font-medium text-black tracking-tight">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs md:text-sm text-gray border border-lightgray px-2.5 md:px-3 py-1 md:py-1.5 rounded-full hover:border-black hover:text-black transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Div>
            ))}
          </div>
        </div>

        <Div className='mb-16 md:mb-24 lg:mb-32 px-5 md:px-0'>
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-display font-medium text-black mb-4">
            Technologies
          </h3>
          <div className="w-16 h-px bg-black mb-8 md:mb-12 lg:mb-16"></div>
          <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 md:gap-8 lg:gap-10 xl:gap-12 justify-items-center px-5 md:px-0'>
            <SkillIcon path={sk1} />
            <SkillIcon path={sk2} />
            <SkillIcon path={sk3} />
            <SkillIcon path={sk4} />
            <SkillIcon path={sk5} />
            <SkillIcon path={sk6} />
            <SkillIcon path={sk7} />
            <SkillIcon path={sk8} />
            <SkillIcon path={sk9} />
            <SkillIcon path={sk10} />
            <SkillIcon path={sk11} />
            <SkillIcon path={sk12} />
            <SkillIcon path={sk13} />
            <SkillIcon path={sk14} />
            <SkillIcon path={sk15} />
            <SkillIcon path={sk16} />
            <SkillIcon path={sk17} />
            <SkillIcon path={sk18} />
            <SkillIcon path={sk19} />
            <SkillIcon path={sk20} />
            <SkillIcon path={sk21} />
          </div>
        </Div>

        <Portfolio />
        <Achievements />
      </Wrapper>
    </section>
  )
}

export default Skills
