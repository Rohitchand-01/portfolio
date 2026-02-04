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

const Skills = () => {
  return (
    <div
      id='skills'
      className='bg-offwhite py-20 md:py-32 lg:py-40 relative'
    >
      <Wrapper>
        <Div className='mb-16 md:mb-20'>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-black mb-4">
            Skills
          </h2>
          <div className="w-16 h-px bg-black"></div>
        </Div>

        <Div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 md:gap-8 lg:gap-10 mb-20 md:mb-32 justify-items-center'>
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
        </Div>

        <div className='mb-20 md:mb-32'>
          <Div className='mb-12 md:mb-16'>
            <h3 className="text-3xl md:text-5xl font-display font-medium text-black mb-4">
              Technical Expertise
            </h3>
            <div className="w-16 h-px bg-black"></div>
          </Div>

          <div className='space-y-10 md:space-y-12'>
            {skillCategories.map((category, index) => (
              <Div key={index} className="space-y-4">
                <h4 className="text-lg md:text-xl font-medium text-black mb-4">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-sm md:text-base text-gray border border-lightgray px-4 py-2 rounded-full hover:border-black hover:text-black transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Div>
            ))}
          </div>
        </div>

        <Portfolio />
        <Achievements />
      </Wrapper>
    </div>
  )
}

export default Skills
