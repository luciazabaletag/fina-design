import useProducts from "../hooks/useProducts"
import ProductsBestSellers from "./ProductsBestSellers"
import Modal from "./Modal"

const ProductsInterest = () => {

    const { openModal} = useProducts()
  return (
    <div>
        <h1 className="text-zinc-900 uppercase text-2xl font-bold text-center md:px-0">También te podría interesar</h1>
        
        { openModal ? <Modal /> : null}

        <ProductsBestSellers />
    </div>
  )
}

export default ProductsInterest