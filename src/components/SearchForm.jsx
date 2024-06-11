import useProducts from "../hooks/useProducts"

const SearchForm = () => {
    const { searchProducts, setSearchProducts, setSearchMenu, searchMenu } = useProducts()

    const handleClickSearch = () => {
        setSearchMenu(!searchMenu)
    }

  return (
        <div>
            <div action="" className="relative mx-auto w-auto lg:w-max lg:ml-14" onClick={handleClickSearch} >
            <input 
                id='search' 
                type="search" 
                className="text-transparent cursor-pointer relative z-10 h-8 w-8 rounded-full border-none bg-transparent lg:pl-120 outline-none focus:bg-gray-50 focus:bg-opacity-30 focus:w-full focus:cursor-text focus:pl-10 lg:focus:pl-12 focus:pr-4 focus:text-zinc-900 lg:focus:text-white"             
                value={searchProducts}
                onChange={ e => setSearchProducts(e.target.value)}  
                
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-6 border-r border-transparent stroke-zinc-900 lg:stroke-white pl-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </div>
        </div>
  )
}

export default SearchForm