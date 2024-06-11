import { useState, useEffect, useRef } from 'react'
import useCart from '../hooks/useCart'
import useProducts from '../hooks/useProducts'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'
import SearchProducts from './SearchProducts'

const NavBar = () => {
  const { handleSofas, handleSillas, handleLiving, handleAccesorios, handleLuces, isVisible, setIsVisible, setSearchMenu, setSearchProducts } = useProducts()
  const { notificationCart} = useCart()

    const productsNav = [
      { name: 'Sofás', description: 'Sofás de diseño, económicos y cómodos', href: '/market', icon: "/img/icons/sofa.svg", function: function () {handleSofas(), handleSubmitMobile(), handleSubmit()}},
      { name: 'Sillas', description: 'Las sillas que no pueden faltar en casa', href: '/market', icon: "/img/icons/chair.svg", function: function () {handleSillas(), handleSubmitMobile(), handleSubmit()} },
      { name: 'Living', description: 'Mesas de comedor y salón', href: '/market', icon: "/img/icons/table.svg", function: function () {handleLiving(), handleSubmitMobile(), handleSubmit()} },
      { name: 'Luces', description: 'Luces decorativas y de mesa de noche.', href: '/market', icon: "/img/icons/light.svg", function: function () {handleLuces(), handleSubmitMobile(), handleSubmit()} },
      { name: 'Accesorios', description: 'Sección de decoración para casa', href: '/market', icon: "/img/icons/house.svg", function: function () {handleAccesorios(), handleSubmitMobile(), handleSubmit()} },
    ]

  const [menuProduct, setMenuProduct] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const sideNavRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setMenuProduct(false)
      setSearchMenu(false)
      setSearchProducts('')

    }
  }

  const handleSubmit = () => {
    setMenuProduct(!menuProduct)
   
  }
  const handleSubmitMobile = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setIsVisible(!isVisible)
  }

  return (
    <div ref={sideNavRef}>
      <nav className="flex  items-center justify-between p-6 max-w-screen-xl mx-auto">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
           
            <img src='/img/logo.svg' alt='imagen logo' className='w-48'/>
          </Link>
        </div>
        <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={handleSubmitMobile}
        >
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </button>
      </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative" >
            <button 
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 uppercase text-white"
                onClick={handleSubmit}
                
            >
              Productos
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-5 w-4 flex-none text-white" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>

            </button>
            
            { menuProduct ? (
              <div className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ">
                    <div className="p-4">
                      {productsNav.map((item) => (
                        <div 
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            
                            <img className='h-6' src={item.icon} alt={`imagen ${item.name}`} />
                           
                          </div>
                          <div className="flex-auto">
                            <Link to={item.href} onClick={item.function}  className="block font-semibold text-zinc-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  
                  </div>
              ) : ''}
            
           
          </div>

          <Link to="#" className="text-sm font-semibold leading-6 uppercase text-white">
            Novedades
          </Link>
          <Link to="#" className="text-sm font-semibold leading-6 uppercase text-white">
            Ofertas
          </Link>
          <Link to="#" className="text-sm font-semibold leading-6 uppercase text-white">
            Contacto
          </Link>
        </div>
         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <div className="py-6 flex items-center gap-3">
          <SearchForm />

                <Link to={"/cart"} className='relative'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                        { notificationCart >= 1 ? <span className='bg-red-500 rounded-full w-4 h-4 flex items-center justify-center p-1 absolute -top-1.5 -right-2 text-white text-xs'>{notificationCart}</span> : null}
                       
                </Link>
              </div>
        </div>
      <SearchProducts />
      </nav>

      { isVisible ? (
        <div className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img className="w-48" src="/img/logogris.svg" alt="logo" />
            </Link>
            
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={handleSubmitMobile}>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

            </button>

          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="-mx-3">
                  
                    
                      <button 
                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 uppercase text-zinc-900 hover:bg-gray-50"
                        onClick={handleSubmit}  
                      >
                        Productos
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-4 flex-none text-zinc-900" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                      { menuProduct ? (
                        <div className="mt-2 space-y-2">
                          {productsNav.map((item) => (
                            <Link
                              key={item.name}
                              onClick={item.function}
                              to={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-zinc-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>

                      ) : ''}       
                </div>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 uppercase text-zinc-900 hover:bg-gray-50"
                >
                  Novedades
                </Link>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 uppercase text-zinc-900 hover:bg-gray-50"
                >
                  Ofertas
                </Link>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 uppercase text-zinc-900 hover:bg-gray-50"
                >
                  Contacto
                </Link>
              </div>

              <div className="py-6 flex items-center gap-3">
                <SearchForm />
                  
                        <Link to={"/cart"}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-zinc-900 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                          </svg>

                        </Link>
                    
              </div>
              <SearchProducts />
            </div>
          </div>
        </div>
      </div>
      ): (
        ''
      )}
    </div>
  )
}

export default NavBar