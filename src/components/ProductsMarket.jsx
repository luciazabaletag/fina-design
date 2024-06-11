import useProducts from '../hooks/useProducts'

const ProductsMarket = () => {

    const { setProducto, productsMarket, setOpenModal, openModal, } = useProducts()

  return (
    <div className='flex flex-col justify-center flex-wrap md:flex-row md:justify-around lg:justify-between gap-8 my-10 px-4 md:px-6'>
        {productsMarket.map( product => (
            <>
            <div onClick={ () => {
                setProducto(product)
                setOpenModal(!openModal)
            }} 
                className='modal flex flex-col items-center cursor-pointer shadow hover:shadow-lg transition-shadow rounded-lg p-2 relative'
                 key={product.id}
            >
                <div>
                    <img className='w-60 h-72 object-cover  rounded-md' src={product.image} alt={product.name}/>
                    {product.newprice ? <span className='bg-zinc-900 top-0 left-0 ml-5 mt-5 px-2 py-1 rounded-sm absolute text-white text-sm z-10'>Sale</span> : null}
                    
                </div>
                <div className='text-center mt-2'>
                    <p className='text-zinc-600 text-sm first-letter:uppercase font-normal'>{product.category}</p>
                    <p className='text-zinc-900 text-xl font-semibold mt-1'>{product.name}</p>
                    <div className={product.newprice ? 'flex justify-between' : 'justify-center'}>
                        <p className={product.newprice ? 'text-zinc-900 text-sm font-semibold mt-1 mb-2 line-through' : 'text-zinc-900 text-sm font-semibold mt-1 mb-2'} >$ {product.price}</p>
                        <p className='text-red-500 text-sm font-semibold mt-1 mb-2'>{product.newprice ? product.newprice : ''}</p>
                    </div>
                </div>
            </div>
            </>
        ))}
    </div>
  )
}

export default ProductsMarket