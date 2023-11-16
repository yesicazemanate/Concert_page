import icono from "../../assets/concierto.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import whatssapp from "../../assets/whatssapp.png"
const Navbar = () => {
  return (
      <nav className="bg-red-400 h-20 w-full flex justify-between  ">
          <img className="w-12 ml-14 h-12 my-2"
              src={icono} alt="" />
          <div className="flex space-x-20 text-lg font-serif text-yellow-50 px-3 py-6 ">
              <span className="min-w-min hover:bg-red-200 rounded-md hover:text-red-600">
              ARTIST
              </span>
              
              <span className="min-w-min hover:bg-red-200 rounded-md hover:text-red-600">
              PLACE
          </span>
              <span className="min-w-min hover:bg-red-200 rounded-md hover:text-red-600">
              CITY
              </span>
          </div>
          <div className="search-bar py-6 ">
              <input type="text" placeholder="busca tu artista favorito" className="rounded-md " />
          </div>
          <div className="flex min-w-min p-6">
          <img className="w-8  h-8 "
                  src={facebook} alt="" />
              <img className="w-8 ml-6 h-8 "
                  src={instagram} alt="" />
              <img className="w-8 ml-6 h-8 "
                  src={whatssapp} alt="" />
          </div>
          
    </nav>
  )
}

export default Navbar
