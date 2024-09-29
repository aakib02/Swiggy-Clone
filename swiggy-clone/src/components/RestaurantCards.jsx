import React from 'react'

const RestaurantCards = ({item}) => {
  return (
    <>
    <div key={item?.info?.id} className=" bg-white  min-w-[295px] mb-10 h-72  border-gray-200  rounded-lg  hover:scale-95 duration-200 dark:bg-gray-800 dark:border-gray-700" >
    <a href="#">
      <div className='relative '>
        <img className="rounded-lg h-[182px] w-[295px]   object-cover "  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.info?.cloudinaryImageId}`} alt="" />
        <div className='h-full w-full absolute top-0 bg-gradient-to-t from-black from-1% to-transparent to-40% rounded-lg'>
          <div className='absolute bottom-2 left-3'>
            <h1 className='text-gray-200 font-extrabold text-xl'>{item?.info?.aggregatedDiscountInfoV3?.header + " " + item?.info?.aggregatedDiscountInfoV3?.subHeader}</h1>
          </div>
        </div>
        </div>
    </a>
    <div className="p-5 rounded-lg">
        <a href="#">
            <h6 className=" text-lg font-bold tracking-tight text-gray-800 dark:text-white">{item?.info?.name}</h6>
        </a>
        <p className="mb-0 font-normal text-gray-700 dark:text-gray-400 flex "><i className="fi text-green-600 text-xl fi-sr-circle-star me-1"></i>
        <span className='font-semibold me-1'>{item?.info?.avgRatingString}</span> 
        <span className='font-bold text-gray-800 '>{item?.info?.sla?.slaString}</span> 
          </p>
        <p className="text-normal text-gray-500 font-semibold dark:text-gray-400 line-clamp-1">{item?.info?.cuisines.join(", ")}</p>
        <p className="mb-1 font-semibold text-sm text-gray-500 dark:text-gray-400 ">{item?.info?.areaName}</p>
      
    </div>
</div>
    </>
  )
}

export default RestaurantCards