
const Sale = () => {
  return (
    <section className='max-w-screen-xl mx-auto mt-28 mb-20 px-6'>
        <div className='flex flex-col justify-center gap-8 md:flex-row'>
            <div className="bg-[url('/src/assets/img/chair4.jpg')] bg-cover bg-center pl-8 py-28 w-full">
                <div className=' max-w-sm'>
                    <p className='text-zinc-900 font-semibold text-3xl'>Descuento de 20% en Sillas</p>
                    <p className='text-zinc-900 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cum. Odit maxime, porro dolore</p>
                    <button className="py-2 px-3 bg-zinc-900 text-gray-50 uppercase mt-2 font-medium text-sm">Comprar ahora</button>

                </div>
            </div>
            <div className="bg-[url('/src/assets/img/accesorios3.jpg')] bg-cover bg-center pl-8 py-28 w-full">
                <div className=' max-w-sm'>
                    <p className='text-zinc-900 font-semibold text-3xl'>Descuento de 20% en Accesorios</p>
                    <p className='text-zinc-900 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cum. Odit maxime, porro dolore</p>
                    <button className="py-2 px-3 bg-zinc-900 text-gray-50 uppercase mt-2 font-medium text-sm">Comprar ahora</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sale