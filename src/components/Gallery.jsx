import { Link } from 'react-router-dom'
import useProducts from '../hooks/useProducts'

const Gallery = () => {
    const { handleSillas, handleLiving, handleSofas, handleLuces, handleAccesorios } = useProducts()
  return (
    <main className='max-w-screen-xl px-6 mt-20 mx-auto'>

        <div className="grid grid-rows-1 auto-rows-fr md:grid-rows-none md:grid-cols-3 gap-4 md:w-5/6 mx-auto">
            
                <div className='relative'>
                    <div className='absolute z-10 w-full h-full flex flex-col items-center justify-center'>
                        <p className='block font-semibold text-xl text-zinc-900 mb-2'>Sillas</p>
                        <Link to='/market' onClick={() => handleSillas()} className=' text-sm px-1 text-center md:text-lg block text-zinc-900 uppercase underline decoration-1'>Comprar ahora</Link>
                    </div>
                   
                    <img className=" h-full max-w-full rounded-lg" src="/img/chairr.jpg" alt="imagen silla"/>
                </div>

                <div className=' md:row-span-2  relative'>
                    <div className='absolute z-20 w-full h-full flex flex-col items-center justify-center'>
                        <p className='block font-semibold text-xl text-zinc-900 mb-2'>Living</p>
                        <Link to='/market' onClick={() => handleLiving()} className=' text-sm px-1 text-center md:text-lg block text-zinc-900 uppercase underline decoration-1'>Comprar ahora</Link>
                    </div>
                    <img className="h-full object-cover max-w-full rounded-lg" src="/img/livingg.jpg" alt="imagen living"/>
                </div>
                <div className='relative'>
                    <div className='absolute z-30 w-full h-full flex flex-col items-center justify-center'>
                        <p className='block font-semibold text-xl text-zinc-900 mb-2'>Sofás</p>
                        <Link to='/market' onClick={() => handleSofas()} className=' text-sm px-1 text-center md:text-lg block text-zinc-900 uppercase underline decoration-1'>Comprar ahora</Link>
                    </div>
                    <img className="h-full object-cover max-w-full rounded-lg" src="/img/sofaa.jpg" alt="imagen sofa"/>
                </div>
            
                <div className=' relative'>
                    <div className='absolute z-40 w-full h-full flex flex-col items-center justify-center'>
                        <p className='block font-semibold text-xl text-zinc-900 mb-2'>Luces</p>
                        <Link to='/market' onClick={() => handleLuces()} className=' text-sm px-1 text-center md:text-lg block text-zinc-900 uppercase underline decoration-1'>Comprar ahora</Link>
                    </div>
                    <img className="h-full object-cover max-w-full rounded-lg" src="/img/lucess.jpg" alt="imagen luz"/>
                </div>

                <div className='md:col-auto relative'>
                    <div className='absolute z-40 w-full h-full flex flex-col items-center justify-center'>
                        <p className='block font-semibold text-xl text-zinc-900 mb-2'>Accesorios</p>
                        <Link to='/market' onClick={() => handleAccesorios()} className=' text-sm px-1 text-center md:text-lg block text-zinc-900 uppercase underline decoration-1'>Comprar ahora</Link>
                    </div>
                    <img className="h-full object-cover w-full rounded-lg" src="/img/accesorioss.jpg" alt="imagen accesorios"/>
                </div>
        </div>

    </main>
  )
}

export default Gallery