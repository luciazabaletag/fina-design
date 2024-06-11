import useCart from "../hooks/useCart"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { ToastContainer } from "react-toastify"

const TotalCart = () => {

  const { productos, priceWithoutOffer, pricewhithDiscounts, total, minshipping, shippingprice } = useCart()

  const [ urlButton, setUrlButton] = useState(false)

  useEffect(() => {
    if (window.location.pathname === '/order') {
      setUrlButton(!urlButton)
    }
  }, [])

  return (
    <div className="mt-10 md:mt-0 xl:px-10">
        <h1 className="text-zinc-900 text-center uppercase text-lg font-bold">Resumen del pedido</h1>

        <div className="flex flex-col gap-4 mt-5">
          <div className="flex justify-between">
            <p className="text-zinc-700 text-md font-medium">{productos.length} producto/s</p>
            <p className="text-zinc-700 text-md font-medium">${total}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-zinc-700 text-md font-medium">Precio original: </p>
            <p className="text-zinc-700 text-md font-medium">${priceWithoutOffer}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-zinc-700 text-md font-medium">Envío: </p>
            <p className="text-zinc-700 text-md font-medium">{total < minshipping ? `$${shippingprice}` : 'Gratis'}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-zinc-400 text-md font-medium">Descuento: </p>
            <p className="text-zinc-400 text-md font-medium">-${pricewhithDiscounts}</p>
          </div>
          <div className="flex justify-between mt-10">
            <p className="text-zinc-900 text-md font-bold">Total:</p>
            <p className="text-zinc-900 text-md font-bold">${total < minshipping ? total+shippingprice : total}</p>
          </div>
        </div>

        { urlButton ? (
          <>
            <button form='my-form' type="submit" className="bg-zinc-900 text-white mb-10 font-medium uppercase text-lg md:text-xl w-full rounded-md py-2 md:py-3 mt-10 hover:bg-zinc-950 transition-colors flex justify-between px-4 items-center">
              Pagar
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
            <ToastContainer/>       
          </>
        ) : (
          <Link to={"/order"} className="bg-zinc-900 text-white mb-10 font-medium uppercase text-lg md:text-xl w-full rounded-md py-2 md:py-3 mt-10 hover:bg-zinc-950 transition-colors flex justify-between px-4 items-center">
            Continuar
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>

          </Link>
        )}
    </div>
  )
}

export default TotalCart