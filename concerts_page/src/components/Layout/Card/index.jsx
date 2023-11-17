import {fetchData} from "../../hooks/fetchData.js"

const apidata=fetchData("https://kaoxdc.pythonanywhere.com/api-ficha2669739/Artist/")
 export const Card = () => {
    const data =apidata.read()
    return (
      <div className="app">
          <div className="card">
              <div className=' flex '>
                  <span className=' grid grid-rows-4 grid-flow-col gap-4'> {data?.map((user) => (
                      <div key={user.id} className='bg-stone-300 grid justify-items-stretch justify-center  h-96 w-80 rounded-sm m-1.5 mx-6'>
                          {user.name}
                          <div className='min-w-full min-h-full grid justify-center'>
                              <img src={user.photo} alt="" className='h-64 w-64 rounded-sm ' />
                              <button  className='rounded-md bg-red-300 h-7 w-24' > CONCERTS</button>
                          </div>
                         
                      </div>))}
                    </span>
              </div>
             
          </div>
        </div>
  )
}


