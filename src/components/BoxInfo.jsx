
const BoxInfo = () => {
  return (
    <section className=' max-w-screen-xl px-6 my-40 mx-auto'>
        <div className='flex flex-col gap-10 items-center md:gap-5 justify-center md:flex-row flex-wrap'>
            <div className=' flex justify-center border border-zinc-900 p-4 w-52 sm:w-72 relative md:mb-5'>
                <div className='absolute bg-zinc-900 rounded-full p-2 block top-0 -mt-5'>
                <img src='src/assets/img/icons/envios.svg' alt='imagen envios' />

                </div>
                <div className='flex flex-col'>
                    <p className='text-zinc-900 mt-2 text-center text-md sm:text-2xl font-semibold'>Envíos a todo el País</p>
                    <p className=' text-xs sm:text-sm sm:font-normal text-zinc-500 text-center px-4'>100% seguros y en el menor tiempo posible.</p>

                </div>
            </div>

            <div className=' flex justify-center border border-zinc-900 p-4 w-52 sm:w-72 relative md:mb-5'>
                <div className='absolute bg-zinc-900 rounded-full p-2 block top-0 -mt-5'>
                <img src='src/assets/img/icons/pago.svg' alt='imagen pago' />

                </div>
                <div className='flex flex-col'>
                    <p className='text-zinc-900 mt-2 text-center text-md sm:text-2xl font-semibold'>Compra protegida</p>
                    <p className='text-xs sm:text-sm sm:font-normal text-zinc-500 text-center px-4'>Desde el momento de tu compra</p>

                </div>
            </div>

            <div className=' flex justify-center border border-zinc-900 p-4 w-52 sm:w-72 relative md:mb-5'>
                <div className='absolute bg-zinc-900 rounded-full p-2 block top-0 -mt-5'>
                <img src='src/assets/img/icons/online.svg' alt='imagen online' />

                </div>
                <div className='flex flex-col'>
                    <p className='text-zinc-900 mt-2 text-center text-md sm:text-2xl font-semibold'>Soporte online</p>
                    <p className='text-xs sm:text-sm sm:font-normal text-zinc-500 text-center px-4'>Las 24hs del día, los 7 dias de la semana</p>

                </div>
            </div>

            <div className=' flex justify-center border border-zinc-900 p-4 w-52 sm:w-72 relative md:mb-5'>
                <div className='absolute bg-zinc-900 rounded-full p-2 block top-0 -mt-5'>
                <img src='src/assets/img/icons/tarjeta.svg' alt='imagen tarjeta' />

                </div>
                <div className='flex flex-col'>
                    <p className='text-zinc-900 mt-2 text-center text-md sm:text-2xl font-semibold'>Financiaciones</p>
                    <p className='text-xs sm:text-sm  sm:font-normal text-zinc-500 text-center px-4'>Sin preocupaciones y al momento.</p>

                </div>
            </div>
        </div>
    </section>
  )
}

export default BoxInfo