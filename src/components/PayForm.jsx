/* eslint-disable react/prop-types */
import { useState } from 'react'
import FormCardCredit from './FormCardCredit'
import PaypalFormPay from './PaypalFormPay'

const PayForm = ({infoForm, setInfoForm, errors, touched, handleBlur}) => {

  const [check, setCheck] = useState('card')
 
  return (
    <>
    <div className='flex flex-col md:flex-row gap-10 md:gap-32'>

      <div className='flex flex-col mt-5'>
          <div className="inline-flex items-center">
                <label
                    className="relative flex cursor-pointer items-center rounded-full "
                    htmlFor="checkboxcard"
                > 
                    <input
                    type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-500 transition-all checked:bg-zinc-900"
                    id="checkboxcard"
                    name='checkpay'
                    defaultChecked={true}
                    onClick={ () => setCheck('card')}
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
                <span className='ml-2 font-semibold'>Tarjeta de crédito o débito</span>
          </div>
          <div className='flex flex-wrap gap-6 mt-2'>
            <img className='w-8 md:w-10' src='src/assets/img/cardslogos/visa.svg' alt='visa logo' />
            <img className='w-8 md:w-10' src='src/assets/img/cardslogos/amex.svg' alt='amex logo' />
            <img className='w-8 md:w-10' src='src/assets/img/cardslogos/mastercard.svg' alt='mastercard logo' />
            <img className='w-8 md:w-10' src='src/assets/img/cardslogos/discover.svg' alt='discover logo' />
          </div>
      </div>

      <div className='flex flex-col mt-5'>
            <div className="inline-flex items-center">
                <label
                    className="relative flex cursor-pointer items-center rounded-full "
                    htmlFor="checkboxpay"
                > 
                    <input
                    type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-500 transition-all checked:bg-zinc-900"
                    id="checkboxpay"
                    name='checkpay'
                    onClick={ () => setCheck('paypal')}
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
                <span className='ml-2 font-semibold'>Paypal</span>
            </div>
            <div>
              <img className='w-14' src='src/assets/img/cardslogos/paypal.svg' alt='paypal logo' />
            </div>
      </div>
    </div>
    <div>

      { check === 'card' ?  <FormCardCredit infoForm={infoForm} setInfoForm={setInfoForm} errors={errors} touched={touched} handleBlur={handleBlur}/> :  <PaypalFormPay />}
    </div>
    </>
  )
}

export default PayForm