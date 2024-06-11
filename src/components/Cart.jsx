import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import LayoutCart from './LayoutCart'
import NavBar from './NavBar'


const Cart = () => {
  return (
    <>
        <div className='bg-zinc-900'>
            <NavBar />
        </div>
        <div>
            <h1 className='text-center text-3xl uppercase font-bold mt-20'>Tu carrito</h1>
            <div className='max-w-screen-xl mx-auto mt-5 px-6'>
                <Link to={"/market"} className='inline-flex gap-2 font-medium text-zinc-900'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-900">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Seguir comprando
                </Link>
            </div>
        </div>
        <LayoutCart />
        <ToastContainer />
    </>
  )
}

export default Cart