import React from 'react'


export const Home = ({children}) => {
  return (
    <section className="bg-bgHome w-full h-[90vh] bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center">
      {children}
    </section>
  )
}
