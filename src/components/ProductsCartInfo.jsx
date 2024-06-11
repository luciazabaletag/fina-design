import useCart from "../hooks/useCart"

const ProductsCartInfo = () => {
    
        const { productos, handleCart, setProductos} = useCart()
    
        const handleAmount = (e, product) => { 
        const filtrar = productos.find( p => p.id === product.id)
        filtrar.amount = Number(e)
        setProductos([...productos])
        }

  return (
    <div>
        {productos.length ? productos.map( product => (
        <>
        <div className='flex justify-center xl:justify-normal mx-auto px-6  items-center mb-10 ' key={product.id}>
            <div className=' shadow-md rounded-md w-auto xl:w-full flex flex-col md:flex-row'>
                <div>
                <img className='w-60 h-60 object-cover' src={product.image} alt='silla'/>
                </div>

        <div className="flex flex-col justify-between p-4 gap-4 xl:gap-16 xl:flex-row items-center xl:items-start">
                <div className=" flex flex-col  xl:mt-2">
                        <div>
                                <p className='text-zinc-900 text-md xl:text-xl font-semibold text-left w-40'>{product.name}</p>
                                <p className='text-zinc-600 text-sm font-medium'>Color: <span>{product.color}</span></p>
                        </div>

                </div>

                <div>
                        <label className="text-zinc-600 text-sm font-medium xl:hidden">Cantidad:</label>
                        <select defaultValue={product.amount} onChange={e => handleAmount(e.target.value, product)} name="" id="" className="ml-3 xl:ml-0 xl:mt-2 py-2 px-3 bg-transparent border-2 rounded-md text-zinc-900 font-medium focus:outline-none">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>

                        </select>
                </div>
                        <div className={product.newprice ? 'flex gap-3 justify-center items-center xl:flex-col w-28' : 'w-28 text-center'}>
                                <p className={product.newprice ? 'text-zinc-900 text-sm font-semibold xl:mt-2 line-through' : 'text-zinc-900 text-sm font-semibold xl:mt-2'} >$ {product.price * product.amount}</p>
                                <p className='text-red-500 text-sm font-semibold '> {product.newprice ? `$ ${product.newprice * product.amount}` : ''}</p>
                        </div>
                <div>
                        <button type="button" onClick={() => handleCart(product.id)} className=" bg-zinc-900 hover:bg-zinc-950 text-white md:bg-transparent md:text-zinc-900 md:hover:bg-transparent py-1 px-2 xl:p-0 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                        </button>

                </div>
        </div>
        </div> 
        </div>
        </>
        )): <p className="text-zinc-900 text-center uppercase text-lg font-bold">Tu carrito está vacío</p>} 
    </div>
  )
}

export default ProductsCartInfo