import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {

    const [ products, setProducts ] = useState([])

    const [ productsSellers, setProductsSellers]= useState([])
    const [ productsMarket, setProductsMarket ] = useState([])
    const [ openModal, setOpenModal] = useState(false)
    const [ producto, setProducto] = useState()
    const [ searchProducts, setSearchProducts ] = useState('')
    const [ searchMenu, setSearchMenu] = useState(false)
    
    const [isVisible, setIsVisible] = useState(false)
 
        useEffect(() => {
            const dataProducts = () => {

          fetch('json/productos.json')
            .then( res => res.json())
            .then( data => setProducts(data))
        }      
        dataProducts() 
        }, [])
    
    
        useEffect(() => {   
            setProductsMarket([...products].slice(0,8))
            setProductsSellers([...products].sort((a, b) => b.sold - a.sold).slice(0,4))
        }, [products])
    
     
        useEffect(() => {
            if (producto) {
                setOpenModal(!openModal)
            }
        }, [])
            

        const handleAll = () => {
            setProductsMarket([...products])
        }
       
        const handleSillas = () => {
            setProductsMarket([...products])
            const sillas = products.filter( obj => obj.category === "sillas")
            setProductsMarket(sillas)
            setSearchProducts('')
            setIsVisible(false)
         }
        const handleSofas = () => {
            setProductsMarket([...products])
            const sofas = products.filter( obj => obj.category === "sofás")
            setProductsMarket(sofas)
            setSearchProducts('')
            setIsVisible(false)
        }
        const handleLuces = () => {
            setProductsMarket([...products])
            const luces = products.filter( obj => obj.category === "luces")
            setProductsMarket(luces)
            setSearchProducts('')
            setIsVisible(false)
        }
        const handleLiving = () => {
            setProductsMarket([...products])
            const living = products.filter( obj => obj.category === "living")
            setProductsMarket(living)
            setSearchProducts('')
            setIsVisible(false)
        }
    
        const handleAccesorios = () => {
            setProductsMarket([...products])
            const accesorios = products.filter( obj => obj.category === "accesorios")
            setProductsMarket(accesorios)
            setSearchProducts('')
            setIsVisible(false)
        }

  return (
    <ProductsContext.Provider
        value={{
            products,
            producto,
            setProducto,
            productsSellers,
            setProductsSellers,
            productsMarket,
            setProductsMarket,
            handleAll,
            handleAccesorios,
            handleLiving,
            handleLuces,
            handleSillas,
            handleSofas,
            openModal,
            setOpenModal,
            setSearchProducts,
            searchProducts,
            searchMenu,
            setSearchMenu,
            setIsVisible,
            isVisible
        }}
    >
        {children}
    </ProductsContext.Provider>
  )
}

export {
    ProductsProvider
}

export default ProductsContext