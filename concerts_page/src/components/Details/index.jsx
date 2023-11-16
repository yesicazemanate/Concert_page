import React from 'react'
import { useFecth } from '../hooks/useFecth'
const apiData = useFecth('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Concert/')
const Details = () => {
    const data = apiData.read
  return (
      <aside>
          {data.map((datail) => <ul key={datail.id}>
              <li>{ datail.name}</li>
          </ul>)}
    </aside>
  )
}

export default Details

