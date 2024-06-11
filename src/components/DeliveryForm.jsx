/* eslint-disable react/prop-types */

const DeliveryForm = ({infoForm, setInfoForm, errors, touched, handleBlur}) => {
  return (
    <div className="max-w-2xl md:pr-6 xl:pr-0">
        <div>
            <h3 className='text-sm'>Dirección de entrega</h3>
        </div>
        <div className='xl:flex gap-8'>
            <div className="relative bg-inherit mt-5">
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    className={errors.nombre ? "peer bg-transparent h-10 w-full xl:w-80 rounded-sm placeholder-transparent ring-1 px-2 ring-red-500 focus:outline-none border border-red-500 text-red-900 focus:ring-red-500  focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" : "peer bg-transparent h-10 w-full xl:w-80 rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600" }
                    placeholder="Nombre"
                    value={infoForm.nombre}
                    onChange={e => setInfoForm({...infoForm, nombre:e.target.value})} 
                    onBlur={handleBlur}   
                />
                <label htmlFor="nombre" className={errors.nombre ? "absolute cursor-text left-0 -top-3 text-sm text-red-600 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-red-600 peer-focus:text-sm transition-all":"absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all"}>Nombre</label>
                {errors.nombre && touched.nombre && <p className="text-sm text-red-600 font-medium mt-1 ml-1">{errors.nombre}</p>}
            </div>
            <div className="relative bg-inherit mt-5">
                <input 
                    type="text" 
                    id="apellidos" 
                    name="apellidos" 
                    className={errors.apellidos ? "peer bg-transparent h-10 w-full xl:w-80 rounded-sm placeholder-transparent ring-1 px-2 ring-red-500 focus:outline-none border border-red-500 text-red-900 focus:ring-red-500  focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" :"peer bg-transparent h-10 w-full xl:w-80 rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600" }
                    placeholder="Apellidos"
                    value={infoForm.apellidos}
                    onChange={e => setInfoForm({...infoForm, apellidos:e.target.value})}
                    onBlur={handleBlur}
                />
                <label htmlFor="apellidos" className={errors.apellidos ? "absolute cursor-text left-0 -top-3 text-sm text-red-600 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-red-600 peer-focus:text-sm transition-all" :"absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all"}>Apellidos</label>
                {errors.apellidos && touched.apellidos && <p className="text-sm text-red-600 font-medium mt-1">{errors.apellidos}</p>}
            </div>     
        </div>

        <div>
            <div className="relative bg-inherit mt-5 ">
                <input 
                    type="text" 
                    id="direccion" 
                    name="direccion" 
                    className={errors.direccion ? "peer bg-transparent h-10 w-full rounded-sm placeholder-transparent ring-1 px-2 ring-red-500 focus:outline-none border border-red-500 text-red-900 focus:ring-red-500  focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" :"peer bg-transparent h-10 w-full rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600"} 
                    placeholder="Direccion"
                    value={infoForm.direccion}
                    onChange={e => setInfoForm({...infoForm, direccion:e.target.value})}
                    onBlur={handleBlur}
                />
                <label htmlFor="direccion" className={errors.direccion ? "absolute cursor-text left-0 -top-3 text-sm text-red-600 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-red-600 peer-focus:text-sm transition-all" :"absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all"}>Calle-Av-Paseo-Nro</label>
                {errors.direccion && touched.direccion && <p className="text-sm text-red-600 font-medium mt-1">{errors.direccion}</p>}
            </div>

            <div className="relative bg-inherit mt-5">
                <input 
                    type="text" 
                    id="direccion2" 
                    name="direccion2" 
                    className={errors.direccion2 ? "peer bg-transparent h-10 w-full rounded-sm placeholder-transparent ring-1 px-2 ring-red-500 focus:outline-none border border-red-500 text-red-900 focus:ring-red-500  focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" : "peer bg-transparent h-10 w-full rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600" }
                    placeholder="Direccion2"
                    value={infoForm.direccion2}
                    onChange={e => setInfoForm({...infoForm, direccion2:e.target.value})}
                    onBlur={handleBlur} 
                />
                <label htmlFor="direccion2" className={errors.direccion2 ? "absolute cursor-text left-0 -top-3 text-sm text-red-600 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-red-600 peer-focus:text-sm transition-all" :"absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all"}>Escalera-Piso-Puerta</label>
                {errors.direccion2 && touched.direccion2 && <p className="text-sm text-red-600 font-medium mt-1">{errors.direccion2}</p>}
            </div>
        </div>

        <div className='xl:flex gap-8'>
            <div className="relative bg-inherit mt-5">
                <input 
                    type="number" 
                    id="cp" 
                    name="cp" 
                    className={errors.cp ? "peer bg-transparent h-10 w-full xl:w-80 rounded-sm placeholder-transparent ring-1 px-2 ring-red-500 focus:outline-none border border-red-500 text-red-900 focus:ring-red-500  focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" :"peer bg-transparent h-10 w-full xl:w-80 rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600" }
                    placeholder="Código postal"
                    value={infoForm.cp}
                    onChange={e => setInfoForm({...infoForm, cp:e.target.value})} 
                    onBlur={handleBlur}   
                />
                <label htmlFor="cp" className={errors.cp ? "absolute cursor-text left-0 -top-3 text-sm text-red-600 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-red-600 peer-focus:text-sm transition-all" :"absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all"}>Código Postal</label>
                {errors.cp && touched.cp && <p className="text-sm text-red-600 font-medium mt-1">{errors.cp}</p>}
            </div>

            <div className="relative bg-inherit mt-5">
                <input 
                    type="text" 
                    id="ciudad" 
                    name="ciudad" 
                    className={errors.ciudad ? "peer bg-transparent h-10 w-full xl:w-80 rounded-sm placeholder-transparent ring-1 px-2 ring-red-500 focus:outline-none border border-red-500 text-red-900 focus:ring-red-500  focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" :"peer bg-transparent h-10 w-full xl:w-80 rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600" }
                    placeholder="Ciudad"
                    value={infoForm.ciudad}
                    onChange={e => setInfoForm({...infoForm, ciudad:e.target.value})}
                    onBlur={handleBlur}
                />
                <label htmlFor="ciudad" className={errors.ciudad ? "absolute cursor-text left-0 -top-3 text-sm text-red-600 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-red-600 peer-focus:text-sm transition-all" :"absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all"}>Ciudad</label>
                {errors.ciudad && touched.ciudad && <p className="text-sm text-red-600 font-medium mt-1">{errors.ciudad}</p>}
            </div>

        </div>

            <div className="relative bg-inherit mt-5">
                <input 
                    type="number" 
                    id="tel" 
                    name="tel" 
                    className="peer bg-transparent h-10 w-full xl:w-80 rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600" 
                    placeholder="Teléfono"
                    value={infoForm.tel}
                    onChange={e => setInfoForm({...infoForm, tel:e.target.value})}    
                />
                <label htmlFor="tel" className={errors.tel ? "absolute cursor-text left-0 -top-3 text-sm text-red-600 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-red-600 peer-focus:text-sm transition-all" :"absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all"}>Teléfono (Opcional)</label>
                {errors.tel && touched.tel && <p className="text-sm text-red-600 font-medium mt-1">{errors.tel}</p>}
            </div>

            <div className="inline-flex items-center mt-5">
                <label
                    className="relative flex cursor-pointer items-center rounded-full "
                    htmlFor="checkboxfac"
                > 
                    <input
                    type="checkbox"
                    name="checkboxfac"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-500 transition-all checked:bg-zinc-900"
                    id="checkboxfac"
                    checked={infoForm.checkboxfac}
                    onChange={e => setInfoForm({...infoForm, checkboxfac:e.target.checked})}
                    
                    />
                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                    >
                        <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        ></path>
                    </svg>
                    </div>
                    
                </label>
                <span className='ml-2'>La información de facturación y de entrega es la misma.</span>
                
            </div>
                {errors.checkboxfac && touched.checkboxfac && <p className="text-sm text-red-600 font-medium mt-1">{errors.checkboxfac}</p>}
    </div>
  )
}

export default DeliveryForm