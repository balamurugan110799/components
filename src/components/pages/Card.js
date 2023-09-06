import React from 'react'
import Layout from '../layout/Layout'
import { RiGroupLine } from "react-icons/ri";

export default function Card() {
    return (
        <div>
            <Layout>
                <div className=' grid grid-cols-4 smmd:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 py-4'>
                    <div className=' bg-[#ff5774] rounded-[6px] px-6 py-4'>
                        <div className=' grid grid-cols-2'>
                            <div>
                                <div className=' text-h4 text-[#fff]'>1000</div>
                                <div className=' text-h5 text-[#fff]'>Student</div>
                            </div>
                            <div className=' flex justify-end'>
                                <div className=' h-[30px] w-[30px] center bg-[#ff8ea3] rounded-[50%] '>
                                    <RiGroupLine className=' text-[#dd0e49]' />
                                </div>
                            </div>
                        </div>
                        <div className=' text-tiny text-[#fff] pt-4'>Lorem ipsum dolor sit amet</div>
                    </div>


                    <div className=' bg-[#ffbd4c] rounded-[6px] px-6 py-4'>
                        <div className=' grid grid-cols-2'>
                            <div>
                                <div className=' text-h4 text-[#fff]'>1000</div>
                                <div className=' text-h5 text-[#fff]'>Student</div>
                            </div>
                            <div className=' flex justify-end'>
                                <div className=' h-[30px] w-[30px] center bg-[#ffd980] rounded-[50%] '>
                                    <RiGroupLine className=' text-[#ffb300]' />
                                </div>
                            </div>
                        </div>
                        <div className=' text-tiny text-[#fff] pt-4'>Lorem ipsum dolor sit amet</div>
                    </div>


                    <div className=' bg-[#9d63a6] rounded-[6px] px-6 py-4'>
                        <div className=' grid grid-cols-2'>
                            <div>
                                <div className=' text-h4 text-[#fff]'>1000</div>
                                <div className=' text-h5 text-[#fff]'>Student</div>
                            </div>
                            <div className=' flex justify-end'>
                                <div className=' h-[30px] w-[30px] center bg-[#cf92d8] rounded-[50%] '>
                                    <RiGroupLine className=' text-[#9d26b0]' />
                                </div>
                            </div>
                        </div>
                        <div className=' text-tiny text-[#fff] pt-4'>Lorem ipsum dolor sit amet</div>
                    </div>

                    <div className=' bg-[#27a79a] rounded-[6px] px-6 py-4'>
                        <div className=' grid grid-cols-2'>
                            <div>
                                <div className=' text-h4 text-[#fff]'>1000</div>
                                <div className=' text-h5 text-[#fff]'>Student</div>
                            </div>
                            <div className=' flex justify-end'>
                                <div className=' h-[30px] w-[30px] center bg-[#93d2cc] rounded-[50%] '>
                                    <RiGroupLine className=' text-[#27a79a]' />
                                </div>
                            </div>
                        </div>
                        <div className=' text-tiny text-[#fff] pt-4'>Lorem ipsum dolor sit amet</div>
                    </div>



                </div>
            </Layout>
        </div>
    )
}
