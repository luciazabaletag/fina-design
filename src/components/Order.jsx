import { Link } from "react-router-dom"
import TotalCart from "./TotalCart"
import OrderForm from "./OrderForm"

const Order = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6">
        <div>
          <Link to="/" className="-m-1.5 p-1.5">
            <img src='src/assets/img/logogris.svg' alt='imagen logo' className='w-48'/>
          </Link>
        </div>
            <h1 className='text-center text-3xl uppercase font-bold mt-20'>Completar pedido</h1>

            <div className='max-w-screen-xl mx-auto mt-5 px-6'>
                <Link to={"/cart"} className='flex gap-2 font-medium text-zinc-900'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-900">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Modificar carrito
                </Link>
            </div>

        <div className=' grid md:grid-cols-3 grid-cols-1 max-w-screen-xl mx-auto mt-14'>
          <div className='col-span-2'>
              <OrderForm />
          </div>
          <div>
              <TotalCart />
          </div>
      </div>
    </div>
  )
}

export default Order