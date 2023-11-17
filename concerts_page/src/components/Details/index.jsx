
import {fetchData}from '../hooks/fetchData.js'
const apiData = fetchData('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Concert/')
const apiArtist = fetchData('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Concert_Artist/')
const Details = () => {
    const data = apiData.read()
    const data2 = apiArtist.read()
  return (
    <div className="app">
    <div className="card">
        <div className=' flex '>
            <span className=' grid grid-rows-4 grid-flow-col gap-4'> {data?.map((user) => (
            
                <div key={user.id} className='bg-stone-300 grid justify-items-stretch justify-center  h-96 w-80 rounded-sm m-1.5 mx-6'>
                    {user.name}
                    
                    
                   
                   
                   ))}
                   <div className='min-w-full min-h-full grid justify-center'>
                    {data2?.map((data) => (
                        <img src={data.photo} alt="" className='h-64 w-64 rounded-sm ' />
                    ))}
                    </div>
                    </div>
              </span>
        </div>
       
    </div>
  </div>
  )
}

export default Details

