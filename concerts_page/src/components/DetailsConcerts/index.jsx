import React from 'react'

import SelectConcert from '../../Utils'

const DetailsConcerts = () => {
    const concert = SelectConcert();
  return (
      <div className="app">
          <div className="card">
              <div className=' flex '>
                  <span className=' grid grid-rows-4 grid-flow-col gap-4'> 

                      <div key={concert.id} className='bg-stone-300 grid justify-items-stretch justify-center  h-auto w-80 rounded-sm m-1.5 mx-6 '>
                          <p className='font-bold ... text-2xl '  >{concert.name}</p>

                          <div className='min-w-full min-h-full grid justify-center'>

                              <img src={concert.id_artist.photo} alt="" className='h-64 w-64 rounded-sm ' />
                              <div className='font-serif text-2xl'>
                                  {concert.id_place.id_city.name}
                              </div>
                              <div>
                                  {concert.id_place.name}
                              </div>
                              <div>
                                  {concert.id_place.address}
                              </div>
                              <div>
                                  {concert.datetime}
                              </div>


                          </div>
                      </div>
                
                  </span>
              </div>

          </div>
      </div>
  )
}

export default DetailsConcerts
