import React from 'react'

export const ContentContact = () => {
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='w-full flex flex-col gap-6 lg:gap-7'>
      <h2 className='text-xl font-bold underline underline-offset-8 decoration-[#ed05f9] md:text-2xl lg:text-3xl lg:pt-8 xl:text-4xl'>Contacto</h2>
      <form onSubmit={e => onSubmit(e)} className='w-full max-w-[500px] mx-auto flex flex-col gap-4 bg-[#0e0d10] bg-clip-padding bg-opacity-40 rounded-xl shadow-2xl px-5 py-8' style={{backdropFilter: "blur(5px)"}}>
        <p className='text-lg font-bold mx-auto text-center'>¿Quieres que trabajemos juntos?</p>
        <p className='mx-auto'>¡Envíame un mensaje!</p>
        <div class="mb-6">
          <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu nombre</label>
          <input type="text" id="name" className="shadow-sm  text-sm rounded-lg w-full p-2.5 bg-gray-700 text-white outline-1 focus:outline-[#ed05f9]" placeholder="Nombre" required />
        </div>
        <div class="mb-6">
          <label for="email" className="block mb-2 text-sm font-medium text-white">Tu correo</label>
          <input type="email" id="email" className="shadow-sm  text-sm rounded-lg w-full p-2.5 bg-gray-700 text-white outline-1 focus:outline-[#ed05f9]" placeholder='ejemplo@gmail.com' required />
        </div>
        <div className='mb-6'>
          <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
          <textarea id="message" rows="4" className="shadow-sm  text-sm rounded-lg w-full p-2.5 bg-gray-700 text-white outline-1 focus:outline-[#ed05f9]" placeholder="¡Hola!" required></textarea>
        </div>
        <button className='form-button w-[35%] relative bg-[#ed05f9] py-2 px-5 font-bold overflow-hidden transition-all duration-500 shadow-2xl rounded-lg' type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Enviar
        </button>
      </form>
    </div>
  )
}
