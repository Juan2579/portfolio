import React from 'react'
import { TitleHome } from '../components/TitleHome'

export const Home = ({children}) => {
  return (
    <section className="bg-bgHome w-full h-[90vh] bg-center bg-no-repeat bg-cover flex items-center justify-center">
      {children}
    </section>
  )
}
