
const Copyright = () => {
  return (
    <div className="border-t mt-10 border-white flex flex-col gap-5 md:gap-0 md:flex-row items-center md:justify-between py-6">
        <div className="flex gap-4">
            <a href="#"><img className="w-7" src="src/assets/img/icons/twitter.svg" alt="Imagen Twitter" /></a>
            <a href="#"><img className="w-7" src="src/assets/img/icons/facebook.svg" alt="Imagen Fcebook" /></a>
            <a href="#"><img className="w-7" src="src/assets/img/icons/instagram.svg" alt="Imagen Instagram" /></a>
            <a href="#"><img className="w-7" src="src/assets/img/icons/youtube.svg" alt="Imagen Youtube" /></a>
        </div>
        <div className="">
            <p className="text-white text-xs md:text-sm">Fina Design - Proyecto de muestra.</p>
        </div>
        <div className="flex gap-4">
            <img className="w-12" src="src/assets/img/icons/paypal.svg" alt="Paypal logo" />
            <img className="w-12" src="src/assets/img/icons/visa.svg" alt="Paypal visa" />
        </div>
    </div>
  )
}

export default Copyright