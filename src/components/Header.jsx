import InfoHeader from './InfoHeader'
import NavBar from './NavBar'

const Header = () => {

  return (
    <header className="bg-[linear-gradient(to_right_bottom,rgba(34,34,34,0.6),rgba(34,34,34,0.5)),url('src/assets/img/header.jpg')] bg-cover bg-center">
      <NavBar />
      <InfoHeader />
    </header>
    
  )
}

export default Header