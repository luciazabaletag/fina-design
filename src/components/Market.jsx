import { useState, useEffect } from 'react'
import useProducts from '../hooks/useProducts'
import ProductsMarket from './ProductsMarket'
import Modal from './Modal'
import { useLocation, Link } from 'react-router-dom'
import NavBar from './NavBar'
import { ToastContainer } from 'react-toastify'

const Market = () => {

     const { handleAll, handleSillas, handleAccesorios, handleLiving, handleLuces, handleSofas, openModal } = useProducts()

     let { pathname}  = useLocation(); 
     const [ onMarket, setOnMarket ] = useState(false)

     useEffect(() => {
       if (pathname === "/market") {
         setOnMarket(!onMarket)
       }
       
     }, [])    

  return (
    <>
    { onMarket ? (
      <>
      <div className='bg-zinc-900'>
        <NavBar />

      </div>
      
      <section className='max-w-screen-xl mx-auto mt-20'>
        <ToastContainer />
          <div className=' px-6'>
                <Link to={"/"} className=' gap-2 font-medium text-zinc-900 inline-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-900">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Volver

                </Link>
            </div>
       
        <div className='flex gap-5 justify-center flex-wrap mt-5 p-4'>
            
            <button className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-zinc-900 font-semibold text-sm focus:bg-zinc-900 focus:text-white' type='button' onClick={handleAll}>Todos</button>
            <button className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-zinc-900 font-semibold text-sm focus:bg-zinc-900 focus:text-white' type='button' onClick={handleSillas}>Sillas</button>
            <button className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-zinc-900 font-semibold text-sm focus:bg-zinc-900 focus:text-white' type='button' onClick={handleSofas}>Sofás</button>
            <button className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-zinc-900 font-semibold text-sm focus:bg-zinc-900 focus:text-white' type='button' onClick={handleLuces}>Luces</button>
            <button className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-zinc-900 font-semibold text-sm focus:bg-zinc-900 focus:text-white' type='button' onClick={handleLiving}>Living</button>
            <button className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-zinc-900 font-semibold text-sm focus:bg-zinc-900 focus:text-white' type='button' onClick={handleAccesorios}>Accesorios</button>
        </div>

        <div >
             


        { openModal ? <Modal /> : null}


         <ProductsMarket />
                
        </div>
    </section>
    </>
    ): (
      <section className='max-w-screen-xl mx-auto'>
        <ToastContainer />
          <div>
              <h1 className='text-3xl font-semibold text-zinc-900 text-center mb-1 p-2'>Tienda</h1>
              <p className='text-center text-zinc-500 p-2'>Seleccione la categoría que desees y descubre nuestros nuevos productos.</p>
          </div>
          <div className='flex gap-5 justify-center flex-wrap mt-5 p-4'> 
              <button className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-zinc-900 font-semibold text-sm focus:bg-zinc-900 focus:text-white' type='button' onClick={handleAll}>Todos</button>
              <button className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-zinc-900 font-semibold text-sm focus:bg-zinc-900 focus:text-white' type='button' onClick={handleSillas}>Sillas</button>
              <button className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-zinc-900 font-semibold text-sm focus:bg-zinc-900 focus:text-white' type='button' onClick={handleSofas}>Sofás</button>
              <button className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-zinc-900 font-semibold text-sm focus:bg-zinc-900 focus:text-white' type='button' onClick={handleLuces}>Luces</button>
              <button className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-zinc-900 font-semibold text-sm focus:bg-zinc-900 focus:text-white' type='button' onClick={handleLiving}>Living</button>
              <button className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-zinc-900 font-semibold text-sm focus:bg-zinc-900 focus:text-white' type='button' onClick={handleAccesorios}>Accesorios</button>
          </div>
          <div >
          { openModal ? <Modal /> : null}
          <ProductsMarket />     
          </div>
      </section>
    )}
    
    </>
   
  )
}

export default Market