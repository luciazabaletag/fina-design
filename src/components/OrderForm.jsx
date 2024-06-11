import { useState } from 'react'
import ContactForm from './ContactForm'
import DeliveryForm from './DeliveryForm'
import PayForm from './PayForm'
import { Form, Formik} from 'formik'
import validationSchema from '../setting/validationSchema'
import useCart from '../hooks/useCart'


const OrderForm = () => {
    const formStep = [ 1 , 2 , 3]
    const [formNo, setFormNo] = useState(formStep[0])

    const [infoForm, setInfoForm] = useState({
      email: '',
      nombre: '',
      apellidos: '',
      direccion: '',
      direccion2: '',
      cp: '',
      ciudad: '',
      tel: '',
      checkboxfac: false,
      titular: '',
      noTarjeta: '',
      venc: '',
      cvv: ''
    })

    const { submit } = useCart()

    const next = () => {
      if (formNo === 1 ) {
        setFormNo(formNo + 1)
      }
      else if (formNo === 2) {
      setFormNo(formNo + 1)
    }}

    const pre = () => {
      setFormNo(formNo - 1)
    }

  return (
    <div>
        <div className='hidden xl:flex xl:justify-center xl:items-center xl:mb-10'>
          {
            formStep.map((v, i) => <><div className={`w-20 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formStep.length ? 'bg-zinc-900' : 'bg-slate-400'} h-[35px] flex flex-col justify-center items-center`}>
              {v}
            </div>
              {
                i !== formStep.length - 1 && <div className={`w-full h-[2px] ${formNo === i + 2 || formNo === formStep.length ? 'bg-zinc-900' : 'bg-slate-400'}`}></div>
              }
            </>)
          }
        </div>
        <div>
          <Formik initialValues={infoForm}  enableReinitialize={true} validationSchema={validationSchema} onSubmit={submit} >
           
          {({ errors, touched, handleBlur }) => (
            <Form noValidate id='my-form'>
            
            { formNo === 1 && 
                <div>
                  <h1 className="text-zinc-900 uppercase text-lg font-bold">Contacto</h1>
                  <ContactForm infoForm={infoForm} setInfoForm={setInfoForm} errors={errors} touched={touched} handleBlur={handleBlur}/>           
                
                  <div className='mt-4 flex justify-center items-center mb-10'>
                      <button type='button' onClick={next} className='bg-zinc-900 px-3 py-2 text-white uppercase flex gap-3 rounded-md hover:bg-zinc-950'>
                        Continuar
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                      </button>                        
                  </div>
                </div>
            }
            { formNo === 2 &&
                <div>
                  <h1 className="text-zinc-900 uppercase text-lg font-bold">Dirección</h1>
                  <DeliveryForm infoForm={infoForm} setInfoForm={setInfoForm} errors={errors} touched={touched} handleBlur={handleBlur}/>
                  <div className='my-10 gap-5  md:gap-10 flex flex-col-reverse md:flex-row justify-center items-center'>
                    <button onClick={pre} className=' text-zinc-900 font-medium flex gap-2 items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-900">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Volver

                    </button>
                    <button onClick={next} className=' bg-zinc-900 px-3 py-2 text-white uppercase flex gap-3 rounded-md hover:bg-zinc-950'>
                      Continuar
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
            }
            { formNo === 3 && 
                <div>
                  <h1 className="text-zinc-900 uppercase text-lg font-bold">Pago</h1>
                  <PayForm infoForm={infoForm} setInfoForm={setInfoForm} errors={errors} touched={touched} handleBlur={handleBlur}/>
                  <div className='my-10 gap-3 flex justify-center items-center'>
                    <button onClick={pre} className=' text-zinc-900 font-medium flex gap-2 items-center '>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-900">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Volver
                    </button>
                  </div>
                </div>
            }
            </Form>
            )}
            </Formik>
        </div>
    </div>
  )
}

export default OrderForm