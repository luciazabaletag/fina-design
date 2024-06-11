/* eslint-disable react/prop-types */

const ContactForm = ({infoForm, setInfoForm, errors, touched, handleBlur}) => {

  return (
    <div className='mt-5'>
        
        <div className="relative bg-inherit mt-5 mb-10">
            <input 
              type="email" 
              id="email" 
              name="email"   
              className={errors.email ? "peer bg-transparent h-10 w-full md:w-72 rounded-sm  placeholder-transparent ring-1 ring-red-500 px-2 focus:outline-none border border-red-500 text-red-900 focus:ring-red-500  focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" : "peer bg-transparent h-10 w-full md:w-72 rounded-sm text-zinc-700 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-zinc-600 focus:outline-none focus:border-rose-600 "}
              placeholder="Correo electrónico"
              value={infoForm.email}
              onChange={e => setInfoForm({...infoForm, email:e.target.value})}
              onBlur={handleBlur}             
              />
            <label htmlFor="email" className={errors.email ? "absolute cursor-text left-0 -top-3 text-sm text-red-600 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-red-600 peer-focus:text-sm transition-all": "absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-gray-50 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-900 peer-focus:text-sm transition-all"}>Correo electrónico</label>
            {errors.email && touched.email && <p className="text-sm text-red-600 font-medium mt-1">{errors.email}</p>}            
        </div>
       
    </div>
  )
}

export default ContactForm