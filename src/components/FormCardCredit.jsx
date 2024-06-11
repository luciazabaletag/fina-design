/* eslint-disable react/prop-types */
const FormCardCredit = ({infoForm, setInfoForm, errors, touched, handleBlur}) => {
  return (
    <div className="mt-10">
        <div className="sm:max-w-sm">
            <div className="relative bg-inherit mt-5">
                <input 
                    type="text" 
                    id="titular" 
                    name="titular" 
                    className={errors.titular ? "peer bg-transparent h-10 w-full md:w-80 rounded-sm placeholder-transparent ring-1 px-2 ring-red-500 focus:outline-none border border-red-500 text-red-900 focus:ring-red-500  focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500": "peer bg-transparent h-10 w-full md:w-80 rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600"} 
                    placeholder="Titular"
                    value={infoForm.titular}
                    onChange={e => setInfoForm({...infoForm, titular:e.target.value})}
                    onBlur={handleBlur}   
                />
                <label htmlFor="titular" className={errors.titular ? "absolute cursor-text left-0 -top-3 text-sm text-red-600 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-red-600 peer-focus:text-sm transition-all": "absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all"}>Titular de la tarjeta</label>
                {errors.titular && touched.titular && <p className="text-sm text-red-600 font-medium mt-1">{errors.titular}</p>}
            </div>
            <div className="relative bg-inherit mt-5">
                <input 
                    type="number" 
                    id="noTarjeta" 
                    name="noTarjeta" 
                    className={errors.noTarjeta ? "peer bg-transparent h-10 w-full md:w-80 rounded-sm placeholder-transparent ring-1 px-2 ring-red-500 focus:outline-none border border-red-500 text-red-900 focus:ring-red-500  focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" :"peer bg-transparent h-10 w-full md:w-80 rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600"} 
                    placeholder="noTarjeta"
                    value={infoForm.noTarjeta}
                    onChange={e => setInfoForm({...infoForm, noTarjeta:e.target.value})}
                    onBlur={handleBlur}    
                />
                <label htmlFor="noTarjeta" className={errors.noTarjeta ? "absolute cursor-text left-0 -top-3 text-sm text-red-600 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-red-600 peer-focus:text-sm transition-all": "absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all"}>Número de la tarjeta</label>
                {errors.noTarjeta && touched.noTarjeta && <p className="text-sm text-red-600 font-medium mt-1">{errors.noTarjeta}</p>}
            </div>     
        </div>
       
               
            <div className="flex flex-col gap-5 sm:flex-row sm:max-w-sm md:gap-8 mt-5"> 
                <div className="relative bg-inherit">
                    <input 
                        type="number" 
                        id="venc" 
                        name="venc" 
                        className={errors.venc ? "peer bg-transparent h-10 w-full md:w-36 rounded-sm placeholder-transparent ring-1 px-2 ring-red-500 focus:outline-none border border-red-500 text-red-900 focus:ring-red-500  focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"  : "peer bg-transparent h-10 w-full md:w-36 rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600" }
                        placeholder="Vencimiento"
                        value={infoForm.venc}
                        onChange={e => setInfoForm({...infoForm, venc:e.target.value})}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="venc" className={errors.venc ? "absolute cursor-text left-0 -top-3 text-sm text-red-600 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-red-600 peer-focus:text-sm transition-all": "absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all"}>mm/yy</label>
                    {errors.venc && touched.venc && <p className="text-sm text-red-600 font-medium mt-1">{errors.venc}</p>}
                </div>
               

                <div className="relative bg-inherit">
                    <input 
                        type="number" 
                        id="cvv" 
                        name="cvv" 
                        className={errors.cvv ? "peer bg-transparent h-10 w-full md:w-36 rounded-sm placeholder-transparent ring-1 px-2 ring-red-500 focus:outline-none border border-red-500 text-red-900 focus:ring-red-500  focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" : "peer bg-transparent h-10 w-full md:w-36 rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600"} 
                        placeholder="Código de seguridad"
                        value={infoForm.cvv}
                        onChange={e => setInfoForm({...infoForm, cvv:e.target.value})}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="cvv" className={errors.cvv ? "absolute cursor-text left-0 -top-3 text-sm text-red-600 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-red-600 peer-focus:text-sm transition-all": "absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all"}>cvv</label>
                    {errors.cvv && touched.cvv && <p className="text-sm text-red-600 font-medium mt-1">{errors.cvv}</p>}
                </div>     

            </div>
       
    </div>
  )
}

export default FormCardCredit