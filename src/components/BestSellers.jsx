import useProducts from "../hooks/useProducts"
import ProductsBestSellers from "./ProductsBestSellers"
import Modal from "./Modal"

const BestSellers = () => {

    const { openModal } = useProducts()
    
  return (
    <section className='mt-16 max-w-screen-xl mx-auto'>
        <div>
            <h1 className='text-3xl font-semibold text-zinc-900 text-center mb-1'>Más vendidos</h1>
            <p className='text-center text-zinc-500 px-1'>Estos son algunos de los productos más elegidos por nuestros clientes.</p>
        </div>

        { openModal ? <Modal /> : null}

        <ProductsBestSellers />      
    </section>
  )
}

export default BestSellers