import { useEffect, useRef } from 'react'
import useCart from '../hooks/useCart'
import useProducts from '../hooks/useProducts'

const Modal = () => {

    const { producto, setOpenModal} = useProducts()
    const { handleAddCart, handleChange, cant, setCant} = useCart()

    const modalRef = useRef(null);

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModal(false)
        setCant(0)
      }
    }

    return (
        <>
          <div>
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0  bg-zinc-900 bg-opacity-30">
                <div className="mx-auto overflow-hidden rounded-lg bg-white shadow-xl sm:w-full sm:max-w-md relative"  ref={modalRef}>
                    <img className='w-full h-72 object-cover object-center p-4' src={producto?.image} alt={producto?.name} />
                    <div className=" px-4">
                      <button type="button" onClick={() => {setOpenModal(false); setCant(0)}} className="absolute top-4 right-4 rounded-lg p-1 text-center font-medium text-secondary-500 transition-all hover:bg-secondary-100">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                          </svg>
                      </button>
                    <h3 className="text-lg font-medium text-center text-zinc-900">{producto?.name}</h3>
                    <div className="mt-2 text-sm text-zinc-900">{producto?.info}</div>
                    </div>
                    <div className=" bg-secondary-50 px-6 py-3">
                    <label htmlFor="cant" className="mr-4 text-sm font-semibold">Cantidad:</label>
                        <select defaultValue={producto.cant} onChange={e => handleChange(e.target.value)}  id="cant" className="text-center py-2.5 px-0 text-sm text-gray-700 bg-transparent  appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected disabled>--Seleccione--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        
                        <div className={producto?.newprice ? 'flex justify-center gap-4' : 'flex justify-center'}>
                                <p className={producto?.newprice ? 'text-zinc-900 text-sm font-semibold mt-1 mb-2 line-through' : 'text-zinc-900 text-sm font-semibold mt-1 mb-2'} >$ {producto?.price}</p>
                                <p className='text-red-500 text-sm font-semibold mt-1 mb-2'>{producto?.newprice ? producto?.newprice : ''}</p>
                            </div>
                        <div className='flex justify-center mt-2'>
                            <button type="button" onClick={() => handleAddCart(producto)} disabled={cant < 1} className="rounded-lg border border-gray-300 bg-zinc-900 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-zinc-950 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-300 disabled:text-gray-400">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </>
  )
}

export default Modal