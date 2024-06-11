import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useProducts from "../hooks/useProducts";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

const CartProvider = ({children}) => {
    
   const [ productos, setProductos] = useState([])
   const [ notificationCart, setNotificationCart ] = useState()
   const [ cant, setCant] = useState()
   
   const { setOpenModal} = useProducts()
   const navigate = useNavigate()

   const handleChange = (valor) => {
    setCant(Number(valor))
    }
    
   const handleAddCart = product => {
     setOpenModal(false)
     notify() 
     const actualizar = productos.find(p => p.id === product.id)
        if (actualizar) {
            actualizar.amount = cant
            setProductos([...productos])
        }
        else{
            product.amount = cant
            
        setProductos([...productos, product])
        }
        setCant(0)
    }

   let shippingprice = 5.99;
   let minshipping = 120;
   let priceWithoutOffer = productos.reduce((acumulador, actual) => acumulador + (actual.price * actual.amount), 0);
   
   let discounts = productos.map( d => (isNaN(d.newprice)  ? 0 : (d.price - d.newprice)* d.amount))
       
   let pricewhithDiscounts = discounts.reduce((acumulador, actual) => acumulador + actual, 0);
  
   let total = priceWithoutOffer - pricewhithDiscounts;
   
   useEffect(() => {
       const data = localStorage.getItem('product');
       if (data) {
           setProductos(JSON.parse(data))
       }
   }, [])

   const notify = () => {
    toast.success("Producto agregado al carrito", { autoClose: 3000 })
   }

   const notifyBuy = () => {
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
    toast.promise(
    resolveAfter3Sec,
    {
      pending: 'Realizando pago...',
      success: 'Compra realizada! muchas gracias! 👌',
      error: 'Error en la compra'
    }
    )
    }

    const submit = (values) => {
        notifyBuy()
        setTimeout(() => {
            navigate("/")
            
        }, 9000);
        setProductos([])
    }

    useEffect(() => {
        localStorage.setItem('product', JSON.stringify(productos))
        setNotificationCart(productos?.length)
    }, [productos])

    const handleCart = id => {
        const deleteProduct = productos.filter( product => product.id !== id)
        setProductos(deleteProduct)
    }

  return (
    <CartContext.Provider
        value={{
            notify,
            productos,
            setProductos,
            notificationCart,
            setNotificationCart,
            handleCart,
            priceWithoutOffer,
            pricewhithDiscounts,
            total,
            shippingprice,
            minshipping,
            submit,
            handleAddCart,
            handleChange,    
            cant,
            setCant,  
        }}
    >
        {children}
    </CartContext.Provider>
  )
}

export {
    CartProvider
}

export default CartContext