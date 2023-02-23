import React from 'react'

export const AboutMe = ({children}) => {
  return (
    <section id='aboutme' className='w-full h-auto bg-[#160d45] text-white px-6 py-6 md:px-8 lg:px-12'>
      {children}
    </section>
  )
}
