import './style.css'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Navbar from '../components/navbar/index.jsx'
import Artist from '../pages/Artist/index.jsx'
import Concert from '../pages/Concerts/index.jsx'
import Biography from'../pages/Biography/index.jsx'

const AppRoutes=()=>{
  let routes=useRoutes([
    {path: '/', element: <Artist/>},
    {path: 'contacto', element: <Concert/>},
    {path: '/*', element: <Biography/>}
  ])
  return routes
}
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <AppRoutes/>
     
    </BrowserRouter>
     
      
    
   
  )
}

export default App
