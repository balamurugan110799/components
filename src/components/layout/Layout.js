import React from 'react'
import Nav from './Nav'

export default function Layout(props) {
    return (
        <div>
            <div className=' grid grid-cols-12'>
                <div className=' col-span-2 bg-primary py-2'>
                    <div className='px-2 text-white text-base'>
                        Components
                    </div>
                </div>
                <div className=' col-span-10 bg-primary py-2'>

                </div>

                <div className=' col-span-2 px-2'>
                    <Nav />
                </div>
                <div className=' col-span-10 px-2 relative overflow-auto h-[96vh]'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
