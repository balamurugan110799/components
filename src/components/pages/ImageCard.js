import React from 'react'
import Layout from '../layout/Layout'

import coffee from "../images/coffe.jpg"
import classroom from "../images/classroom.jpg"
import diagram from "../images/diagram.jpg"
import teach from "../images/teach.jpg"

export default function ImageCard() {
    return (
        <div>
            <Layout>
                <div className=' grid grid-cols-4 smmd:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 py-4'>

                    <div className="group overflow-hidden border-radius transition-5">
                        <img src={coffee} alt="coffee" className='borders-rad object-center transition-5 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  border-radius w-[100%] ' />
                    </div>



                    <div className="group overflow-hidden border-radius transition-5">
                        <img src={classroom} alt="classroom" className='borders-rad object-center transition-5 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  border-radius w-[100%] ' />
                    </div>

                    <div className="group overflow-hidden border-radius transition-5">
                        <img src={diagram} alt="diagram" className='borders-rad object-center transition-5 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  border-radius w-[100%] ' />
                    </div>

                    <div className="group overflow-hidden border-radius transition-5">
                        <img src={teach} alt="teach" className='borders-rad object-center transition-5 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  border-radius w-[100%] ' />
                    </div>
                </div>
            </Layout>
        </div>
    )
}
