import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from './Layout'

export default function Nav() {
    return (
        <div>
            <NavLink to={"/card"}>
            <div className=' bg-grey px-4 py-2 w-full text-tiny text-text-color duration-300 hover:pl-[4px]  hover:bg-[#e5ebff]  hover:text-primary cursor-pointer'>
            Card
          </div>
            </NavLink>
 
            <NavLink to={"/testimonial"}>
            <div className=' bg-grey px-4 py-2 w-full text-tiny text-text-color duration-300 hover:pl-[4px]  hover:bg-[#e5ebff]  hover:text-primary cursor-pointer'>
            Testimonial
          </div>
            </NavLink>
          <div className='  bg-grey px-4 py-2 w-full text-tiny text-text-color duration-300 hover:pl-[4px]  hover:bg-[#e5ebff]  hover:text-primary cursor-pointer'>
            Card
          </div>
        </div>
    )
}
