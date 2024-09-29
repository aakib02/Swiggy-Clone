import React from 'react'
import RestaurantCards from './RestaurantCards'

const OnlineFood = ({data}) => {
  return (
    <>
             {data.map(({item}) =>(
<>
<RestaurantCards {...item}/>
</>
             )
          )}
  </>
  )
}

export default OnlineFood