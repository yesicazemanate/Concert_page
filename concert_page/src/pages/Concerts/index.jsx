import useFecth from '../../components/Layout/useFecth'
 const Concert = () => {
   const {data} = useFecth('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Concert/')

   return(
    <>
    
    <div key={data.id}>
    <h1 >{data.name}</h1>
    <div>{data.datetime}</div>
    <div>{data.id_artist}</div>
    <div>{data.id_place}</div>
    </div>
    </>
   )
}
export default Concert
