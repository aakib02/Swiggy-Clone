import React, { useEffect, useState } from 'react'
import OnyourMind from './OnyourMind'
import TopRestaurant from './TopRestaurant'
import OnlineFood from './OnlineFood'

const Body = () => {
  const [TopRestaurantData, setTopRestaurantData] = useState([])
  const [OnYourMind, setOnYourMind] = useState([])
  async function fetchData() {
    let res = await fetch('http://localhost:9000');
    let result = await res.json();
    setOnYourMind(result[0]?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    setTopRestaurantData(result[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='w-full '>
      <div className=' w-[75%] overflow-hidden mx-auto '>
     <OnyourMind  data={OnYourMind}/>
     <TopRestaurant data={TopRestaurantData}/>
     <OnlineFood data={TopRestaurantData}/>
      </div>
    </div>
  )
}

export default Body