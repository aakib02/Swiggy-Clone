import React, {useState} from 'react'

const OnyourMind = ({data}) => {
    const [scrollDish, setscrollDish] = useState(0)

    const leftArrow = () => {
      scrollDish <= 0 ? "" : setscrollDish((prev) => prev - 61)
    }
    const rightArrow = () => {
      scrollDish >= 184 ? "" : setscrollDish((prev) => prev + 61)
    }
  return (
    <div className='w-full  '>
   <div className='whatsMind mt-4 '>
          <div className='flex justify-between'>
            <h1 className='text-3xl font-bold'>What's on your mind?</h1>
            <div className='arrow flex gap-2 '>
              <div className={`left w-8 h-8 rounded-full  flex cursor-pointer justify-center items-center pt-1 ` + (scrollDish <= 0 ? "bg-gray-100" : "bg-gray-300")}>
                <i className={`fi text-2xl fi-rr-arrow-small-left ` + (scrollDish <= 0 ? "text-gray-400" : "text-gray-800")} onClick={leftArrow}></i>
              </div>
              <div className={`right w-8 h-8 rounded-full  flex cursor-pointer justify-center items-center pt-1 ` + (scrollDish >= 184 ? "bg-gray-100" : "bg-gray-300")}>
                <i className={`fi text-2xl  fi-rr-arrow-small-right ` + (scrollDish >= 184 ? "text-gray-400" : "text-gray-800")} onClick={rightArrow}></i>
              </div>
            </div>
          </div>
        </div>
        <div className='flex  gap-6 mt-4 duration-500  ' style={{ translate: `-${scrollDish}%` }}>
          {data.map((item) =>(
                <img key={item.id}
                 className='w-[15%]'  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item?.imageId}`} alt="error" />
            )
         )}
        </div>
        <hr className='border my-10'/>
    </div>
  )
}

export default OnyourMind