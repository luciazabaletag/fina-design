
import TotalCart from './TotalCart'
import ProductsCartInfo from './ProductsCartInfo'
import ProductsInterest from './ProductsInterest'

const LayoutCart = () => {
  return (
    <>
      <div className=' grid md:grid-cols-3 grid-cols-1 max-w-screen-xl mx-auto mt-14'>
          <div className='col-span-2'>
              <ProductsCartInfo />
          </div>
          <div className='px-6'>

              <TotalCart />
          </div>
      </div>
      <div className='max-w-screen-xl mx-auto mt-20'>
          <ProductsInterest />
      </div>
    </>
  )
}

export default LayoutCart