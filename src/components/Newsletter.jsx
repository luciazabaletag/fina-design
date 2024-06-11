
const Newsletter = () => {
  return (
    <div className='bg-gray-200'>
            <div className='max-w-screen-xl px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center md:gap-16 justify-between'>
                <div className='flex gap-4 items-center py-6'>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 text-zinc-900">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                    </svg>

                    </div>
                    <div>
                    <p className='text-zinc-900 text-xs md:text-base font-bold'>Regístrate gratis para recibir todas nuestras ofertas y un super descuento en tu primera compra</p>

                    </div>

                </div>
                <div className='flex gap-4 items center w-full relative mb-6 md:mb-0'>
                    <form className='w-full flex gap-2 items-center justify-between'>
                    <label htmlFor='newslatter' className='relative cursor-pointer w-full'>
                        <input id='newslatter' type="email" placeholder="Input" className='h-10 w-full px-4 text-md text-zinc-900 bg-transparent border-zinc-900 border-b outline-none placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                        <span className='text-sm md:text-base text-zinc-900 text-opacity-50 bg-transparent absolute left-2 top-4 md:top-3 px-1 transition duration-200 input-email'>Tu email</span>
                    </label>
                        <button type='submit' href='#'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-zinc-900">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Newsletter