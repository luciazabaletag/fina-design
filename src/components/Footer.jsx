
import Copyright from './Copyright'
import Newsletter from './Newsletter'

const Footer = () => {
  return (
    <footer className='bg-zinc-900'>
        <Newsletter />
       
        <div className=" max-w-screen-xl px-4 md:px-6 pt-10 mx-auto">
            <div className=" flex flex-col gap-10 md:flex-row justify-between">
                <div>
                    <div>
                        <img className=" w-48" src="src/assets/img/logo.svg" alt="Imagen logo" />
                    </div>
                    <div className=" flex flex-col gap-8 mt-8">
                        <div className="flex gap-3 items-center">
                            <img src="src/assets/img/icons/place.svg" alt="Imagen Place" />
                            <p className="text-white font-regular">Una dirección 123, Barcelona, España.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <img src="src/assets/img/icons/phone.svg" alt="Imagen phone" />
                            <p className="text-white font-regular">123456456789</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <img src="src/assets/img/icons/email.svg" alt="Imagen Email" />
                            <p className="text-white font-regular">finadesign@finad.com</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-5 pt-1">
                        <h3 className="text-white text-lg font-semibold mb-1 mt-10 md:mt-0">Información</h3>
                        <nav className="text-zinc-500 text-sm flex flex-col gap-6">
                            <a href="#">Sobre nosotros</a>
                            <a href="#">Contacto</a>
                            <a href="#">Atención al cliente</a>
                            <a href="#">Preguntas Frecuentes</a>
                            <a href="#">Términos y Condiciones</a>
                        </nav>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-5 pt-1">
                        <h3 className="text-white text-lg font-semibold mb-1">Ayuda y Soporte</h3>
                        <nav className="text-zinc-500 text-sm flex flex-col gap-6">
                            <a href="#">Como comprar</a>
                            <a href="#">Devoluciones</a>
                            <a href="#">Envíos</a>
                            <a href="#">Métodos de pagos</a>
                            <a href="#">Privacidad</a>
                        </nav>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-5 pt-1">
                        <h3 className="text-white text-lg font-semibold mb-1">Mi cuenta</h3>
                        <nav className="text-zinc-500 text-sm flex flex-col gap-6">
                            <a href="#">Mi cuenta</a>
                            <a href="#">Ingresar / Registrarse</a>
                            <a href="#">Contáctanos</a>
                            <a href="#">Lista de deseos</a>
                            <a href="#">Historial de pedidos</a>
                        </nav>
                    </div>
                </div>
            </div>
            <Copyright />
        </div>
   
    </footer>
  )
}

export default Footer