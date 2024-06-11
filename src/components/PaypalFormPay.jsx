
const PaypalFormPay = () => {
  return (
    <div className="mt-8">
        <h3 className='text-center text-sm'>Pagar con Paypal</h3>
        <div className="flex flex-col items-center">
            <div className="relative bg-inherit mt-5 w-full max-w-xs">
                <input type="email" id="email" name="email" className="peer bg-transparent h-10 w-full  rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600" placeholder="Correo electrónico"/>
                <label htmlFor="email" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all">Correo electrónico</label>
            </div>

            <div className="relative bg-inherit mt-5 w-full max-w-xs">
            <input type="password" id="password" name="password" className="peer bg-transparent h-10 w-full  max-w-xs rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600" placeholder="Password"/>
            <label htmlFor="password" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all">Password</label>
            </div>
            <button className='w-full max-w-xs bg-blue-900 py-2 text-white font-semibold text-sm mt-5 rounded-sm'>Iniciar Sesión</button>
        </div>
    </div>
  )
}

export default PaypalFormPay