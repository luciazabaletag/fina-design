import { Link } from "react-router-dom"

const InfoHeader = () => {
  return (
    <div className="text-gray-50 mt-28 p-6 max-w-screen-xl mx-auto">
        <p className="text-xl uppercase tracking-wider">Diseño de Interiores</p>
        <p className="text-6xl font-bold">Fina Design</p>
        <p className="max-w-lg mt-3">Aquí descubrirás productos en tendencia. Estamos comprometidos con la naturaleza, la sostenibilidad y la preocupación por el medio ambiente.</p>
        <Link to="/market" className="inline-block py-2 px-3 bg-gray-50 hover:bg-gray-200 transition-all text-zinc-800 uppercase mt-4 mb-20 font-semibold rounded-lg">Comprar ahora</Link>
    </div>
  )
}

export default InfoHeader