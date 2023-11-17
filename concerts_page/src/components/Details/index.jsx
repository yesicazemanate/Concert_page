
import {fetchData}from '../hooks/fetchData.js'
const apiData = fetchData('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Concert/')
const Details = () => {
    const data = apiData.read()
    
  return (
    <div className="app">
    <div className="card">
        <div className=' flex '>
            <span className=' grid grid-rows-4 grid-flow-col gap-4'> {data?.map((user) => (
            
              <div key={user.id} className='bg-stone-300 grid justify-items-stretch justify-center  h-auto w-80 rounded-sm m-1.5 mx-6 '>
                <p className='font-bold ... text-2xl '  >{user.name}</p> 

                   <div className='min-w-full min-h-full grid justify-center'>
                    
                  <img src={user.id_artist.photo} alt="" className='h-64 w-64 rounded-sm ' />
                  <div className='font-serif text-2xl'>
                    {user.id_place.id_city.name}
                  </div>
                  <div>
                    {user.id_place.name}
                  </div>
                  <div>
                    {user.id_place.address}
                  </div>
                  <div>
                    {user.datetime}
                  </div>

                   
                    </div>
              </div>
            ))}
              </span>
        </div>
       
    </div>
  </div>
  )
}

export default Details

