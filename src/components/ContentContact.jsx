import React, { useRef } from 'react'
import { FormPopUp } from './FormPopUp'
import { useSentForm } from '../hooks/useSentForm'
import { useIsVisible } from '../hooks/useIsVisible'

export const ContentContact = ({setShowNavbar}) => {
  const {ref, isVisible} = useIsVisible(0.4)
  const form = useRef()
  
  const {
  formVariables: {
    name, 
    setName,
    email,
    setEmail,
    message, 
    setMessage,
    onSubmit,
    loading,
    error
  }, 
  modalVariables: {
    closeModal,
    popUp, 
    modal
  } 
  } = useSentForm({form, setShowNavbar})

  return (
    <div ref={ref} className={`w-full flex flex-col gap-6 lg:gap-7 ${
      isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'
      }`}>
      <h2 className='text-xl font-bold underline underline-offset-8 decoration-[#ed05f9] md:text-2xl lg:text-3xl lg:pt-8 xl:text-4xl'>Contacto</h2>
      <form ref={form} onSubmit={e => onSubmit(e)} className='w-full max-w-[500px] mx-auto flex flex-col gap-4 bg-[#0e0d10] bg-clip-padding bg-opacity-40 rounded-xl shadow-2xl px-5 py-8 mb-10' style={{backdropFilter: "blur(5px)"}}>
        <p className='text-lg font-bold mx-auto text-center'>¿Quieres que trabajemos juntos?</p>
        <p className='mx-auto'>¡Envíame un mensaje!</p>
        <div className="mb-6">
          <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu nombre</label>
          <input value={name} onChange={e => setName(e.target.value)} type="text" id='from_name' name="from_name" className="shadow-sm  text-sm rounded-lg w-full p-2.5 bg-gray-700 text-white outline-1 focus:outline-[#ed05f9]" placeholder="Nombre" required />
        </div>
        <div className="mb-6">
          <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-white">Tu correo</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" id='user_email' name="user_email" className="shadow-sm  text-sm rounded-lg w-full p-2.5 bg-gray-700 text-white outline-1 focus:outline-[#ed05f9]" placeholder='ejemplo@gmail.com' required />
        </div>
        <div className='mb-6'>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} name="message" id="message" rows="4" className="shadow-sm  text-sm rounded-lg w-full p-2.5 bg-gray-700 text-white outline-1 focus:outline-[#ed05f9]" placeholder="¡Hola!" required></textarea>
        </div>
        <button className='form-button w-[35%] relative bg-[#ed05f9] py-2 px-5 font-bold overflow-hidden transition-all duration-500 shadow-2xl rounded-lg' type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Enviar
        </button>
      </form>
      <FormPopUp error={error} loading={loading} closeModal={closeModal} modal={modal} popUp={popUp}  />
    </div>
  )
}
