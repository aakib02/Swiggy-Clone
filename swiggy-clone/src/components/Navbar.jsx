import React from 'react'

const Navbar = () => {
  const NavItems = [
    {
      name: "Swiggy Corporate",
      icon: <i className="fi fi-rr-folder  "></i>
    },
    {
      name: "Search",
      icon: <i className="fi fi-br-search "></i>
    },
    {
      name: "Offers",
      icon: <i className="fi fi-rr-badge-percent "></i>
    },
    {
      name: "Help",
      icon: <i className="fi fi-ss-life-ring "></i>
    },
    {
      name: "Sign In",
      icon: <i className="fi fi-rs-user  "></i>
    },
    {
      name: "Cart",
      icon: <i className="fi fi-rr-shopping-cart "></i>
    },
  ]
  return (
    // navbar.. 
    <div className='w-full shadow-md border  h-24 flex justify-center items-center'>
      <div className='w-[85%] flex justify-between items-center'>
        <div className='logo  flex items-center'>
          <img className='w-16 hover:scale-110 transition me-6 cursor-pointer' src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA" alt="" />
          <p className='font-semibold border-b-2 border-b-black hover:border-b-orange-500 me-4 hover:orange-500 cursor-pointer hover:text-orange-500'>other</p>
          <i className="fi fi-sr-angle-small-down mt-2 text-orange-500 cursor-pointer  text-2xl"></i>
        </div>
        <div className='navbar-items flex gap-12 font-semibold '>
          {NavItems.map((NavItems,i) => (
              <div className='flex cursor-pointer hover:text-orange-500 'key={i}>
                <i className='me-1 mt-0.5 text-gray-600 '>{NavItems.icon}</i>
                <p className=' text-gray-600 hover:text-orange-500'>{NavItems.name}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar