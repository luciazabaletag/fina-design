import { Link, useNavigate } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import { useState, useEffect } from 'react'

const SearchProducts = () => {
    const { products, searchProducts, searchMenu, handleSillas, setSearchMenu, handleSofas, handleLuces, handleLiving, handleAccesorios, setSearchProducts } = useProducts()
    const [ productListSearch, setProductListSearch] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        switch (productListSearch.category) {
            case 'sillas': handleSillas(), navigate('/market'), setSearchMenu(false)
                break;
            case 'sofás': handleSofas(), navigate('/market'), setSearchMenu(false)
                break;
            case 'luces' : handleLuces(), navigate('/market'), setSearchMenu(false)
                break;
            case 'living': handleLiving(), navigate('/market'), setSearchMenu(false)
                break;
            case 'accesorios': handleAccesorios(), navigate('/market'), setSearchMenu(false)
                break;
            default:
                break;
        }
       
    }, [productListSearch])
  
  return (
    <>
    {searchProducts.length >= 1 && searchMenu  && (
        <div className='relative'>
          <div className='absolute lg:right-0 lg:top-3 z-30 mt-3 w-full lg:w-screen lg:max-w-sm lg:max-h-[35rem] lg:overflow-y-auto rounded-3xl bg-white shadow-lg'>
                  
              {products.filter((product) => product.name.toLowerCase().includes(searchProducts)).map( product => (
                <>
                <div>
                    <Link 
                        key={product.id} 
                        className='flex flex-col lg:flex-row lg:gap-5 my-5 py-5 lg:py-0 px-5 mx-5 items-center bg-gray-50 hover:bg-gray-100 rounded-lg'
                        onClick={() => setProductListSearch(product)}
                    >
                    
                        <img className='w-20 h-20 object-cover my-3  rounded-md' src={product.image} alt={product.name}/>
                        <p className=''>{product.name}</p>
                    </Link>
                </div>
                </>
              ))}
          </div>
        </div>
    )}
    </>
  )
}

export default SearchProducts