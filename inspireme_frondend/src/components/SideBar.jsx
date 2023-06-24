import React from "react";
import { NavLink, Link } from "react-router-dom"; //https://reactrouter.com/en/main/components/nav-link //https://reactrouter.com/en/main/components/link
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import logoInspireMe from '../assets/logoInspireMe.png'

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
const isActiveStyle = 'flex items-center px-5 gap-3 text-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize'
const categories = [
  { name: 'Horror' },
  { name: 'Drama' },
  { name: 'Comedy' },
  { name: 'Action' },
  { name: 'Romantic' },
  { name: 'True Stories' },
  { name: 'documentary' },
  { name: 'TV Shows' },
  { name: 'Other' }
]

const SideBar = ({ user, closeToggle }) => {

  const handleCloseSideBar = () => {
    if (closeToggle !== 'undefined') {
      closeToggle(false)
    }

  }
  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hidden-scroll-bar'>
      <div className='flex- flex-col'>
        <Link
          to="/"
          className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
          onClick={handleCloseSideBar}
        >
          <img src={logoInspireMe} alt='logo' className='w-28 h-20 bg bg-black rounded-md mt-1 ' />

        </Link>
        <div className='flex flex-col gap-5'>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
            //https://reactrouter.com/en/main/components/nav-link
            onClick={handleCloseSideBar}
          >
            < RiHomeFill />
            Home

          </NavLink>
          <h3 className='mt-3 px-5 text-base 2xl:text-xl'>Discover categories</h3>

          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
              onClick={handleCloseSideBar}
              key={category.name}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        {user && (
          <Link
            to={`user-profile/${user._id}`}
            className='flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'
            onClick={handleCloseSideBar}
          >
            <img src={user.image} className='w-10 h10 rounded-full' alt='user-profile' />
            <p>{user.userName}</p>

          </Link>
        )}

      </div>
    </div>
  )
}

export default SideBar;