import React from 'react'

export const ContentContact = () => {
  return (
    <div className='w-full flex flex-col gap-6 lg:gap-7'>
      <h2 className='text-xl font-bold underline underline-offset-8 decoration-[#ed05f9] md:text-2xl lg:text-3xl lg:pt-8 xl:text-4xl'>Contacto</h2>
      <form className='w-full max-w-[500px] mx-auto flex flex-col gap-4 bg-[#0e0d10] bg-clip-padding bg-opacity-40 rounded-xl shadow-2xl px-5 py-8' style={{backdropFilter: "blur(5px)"}}>
        <p className='text-lg font-bold mx-auto'>¿Quieres que trabajemos juntos?</p>
        <p className='mx-auto'>¡Envíame un mensaje!</p>
        <div class="mb-6">
          <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu nombre</label>
          <input type="text" id="name" class="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-white placeholder-gray-400 text-white  shadow-sm-light" placeholder="Nombre" required />
        </div>
        <div class="mb-6">
          <label for="email" className="block mb-2 text-sm font-medium text-white">Tu correo</label>
          <input type="email" id="email" class="shadow-sm  text-sm rounded-lg w-full p-2.5 bg-gray-700 text-white outline outline-offset-2 outline-8" placeholder='ejemplo@gmail.com' required />
        </div>
        <div className='mb-6'>
          <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
          <textarea id="message" rows="4" class="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="¡Hola!" required></textarea>
        </div>
      </form>
    </div>
  )
}
