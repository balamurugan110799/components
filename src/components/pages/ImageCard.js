import React from 'react'
import Layout from '../layout/Layout'

import coffee from "../images/coffe.jpg"
import classroom from "../images/classroom.jpg"
import diagram from "../images/diagram.jpg"
import teach from "../images/teach.jpg"
import music from "../images/music.jpg"
import books from "../images/books.jpg"
import notes from "../images/notes.jpg"
import building from "../images/building.jpg"
import airport from "../images/airport.jpg"







import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";


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


                    <div className="group overlay  relative z-5 ">
                        <div className="overflow-hidden">
                            <img src={notes} alt="notes" className="imageScale  h-[250px] w-[100%] object-cover" />
                        </div>
                        <div className="absolute resources responsiveCenter  bottom-0 px-4 sm:h-[100%]   HoverGreyColor  h-[100%] w-[100%]">
                            <div className="smBlock sm:w-[100%]">
                                <div className="absolute bottom-0 md:left-0 mdsm:left-0 px-4">
                                    <h4 className="text-white font-bold heading tracking-wider  text-[64px] sm:center  sm:text-[32px] ">01</h4>
                                    <p className="text-white text-[32px] heading tracking-wider pb-2 font-bold   sm:text-[20px]">Lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute responsiveCenter bg-[#0a0a0a6e] block display-layer-second-card px-4 center  justify-center top-0 h-[100%] py-3 w-[100%]">
                            <div className="w-[100%] h-[100%] center flex justify-center">
                                <p className="text-white absolute top-[10%]  leading-[26px] tracking-wide px-6  h-[100%]  sm:text-[14px] responsiveCenter">consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div className="block absolute bottom-0 py-4 px-6">
                                <p className="text-base text-white pt-2 font-medium leading-[30px] "></p>
                            </div>
                        </div>
                    </div>


                    <div className="group overlay  relative z-5 ">
                        <div className="overflow-hidden">
                            <img src={teach} alt="Capmus" className="imageScale  h-[250px] w-[100%] object-cover" />
                        </div>
                        <div className="absolute resources responsiveCenter  bottom-0 px-4 sm:h-[100%]   HoverGreyColor  h-[100%] w-[100%]">
                            <div className="smBlock sm:w-[100%]">
                                <div className="absolute bottom-0 md:left-0 mdsm:left-0 px-4">
                                    <h4 className="text-white font-bold heading tracking-wider  text-[64px] sm:center  sm:text-[32px] ">02</h4>
                                    <p className="text-white text-[32px] heading tracking-wider pb-2 font-bold   sm:text-[20px]">Lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute responsiveCenter bg-[#0a0a0a6e] block display-layer-second-card px-4 center  justify-center top-0 h-[100%] py-3 w-[100%]">
                            <div className="w-[100%] h-[100%] center flex justify-center">
                                <p className="text-white absolute top-[10%]  leading-[26px] tracking-wide px-6  h-[100%]  sm:text-[14px] responsiveCenter">consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div className="block absolute bottom-0 py-4 px-6">
                                <p className="text-base text-white pt-2 font-medium leading-[30px] "></p>
                            </div>
                        </div>
                    </div>


                    <div className="group overlay  relative z-5 ">
                        <div className="overflow-hidden">
                            <img src={teach} alt="Capmus" className="imageScale  h-[250px] w-[100%] object-cover" />
                        </div>
                        <div className="absolute resources responsiveCenter  bottom-0 px-4 sm:h-[100%]   HoverGreyColor  h-[100%] w-[100%]">
                            <div className="smBlock sm:w-[100%]">
                                <div className="absolute bottom-0 md:left-0 mdsm:left-0 px-4">
                                    <h4 className="text-white font-bold heading tracking-wider  text-[64px] sm:center  sm:text-[32px] ">03</h4>
                                    <p className="text-white text-[32px] heading tracking-wider pb-2 font-bold   sm:text-[20px]">Lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute responsiveCenter bg-[#0a0a0a6e] block display-layer-second-card px-4 center  justify-center top-0 h-[100%] py-3 w-[100%]">
                            <div className="w-[100%] h-[100%] center flex justify-center">
                                <p className="text-white absolute top-[10%]  leading-[26px] tracking-wide px-6  h-[100%]  sm:text-[14px] responsiveCenter">consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div className="block absolute bottom-0 py-4 px-6">
                                <p className="text-base text-white pt-2 font-medium leading-[30px] "></p>
                            </div>
                        </div>
                    </div>


                    <div className="group overlay  relative z-5 ">
                        <div className="overflow-hidden">
                            <img src={teach} alt="Capmus" className="imageScale  h-[250px] w-[100%] object-cover" />
                        </div>
                        <div className="absolute resources responsiveCenter  bottom-0 px-4 sm:h-[100%]   HoverGreyColor  h-[100%] w-[100%]">
                            <div className="smBlock sm:w-[100%]">
                                <div className="absolute bottom-0 md:left-0 mdsm:left-0 px-4">
                                    <h4 className="text-white font-bold heading tracking-wider  text-[64px] sm:center  sm:text-[32px] ">04</h4>
                                    <p className="text-white text-[32px] heading tracking-wider pb-2 font-bold   sm:text-[20px]">Lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute responsiveCenter bg-[#0a0a0a6e] block display-layer-second-card px-4 center  justify-center top-0 h-[100%] py-3 w-[100%]">
                            <div className="w-[100%] h-[100%] center flex justify-center">
                                <p className="text-white absolute top-[10%]  leading-[26px] tracking-wide px-6  h-[100%]  sm:text-[14px] responsiveCenter">consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div className="block absolute bottom-0 py-4 px-6">
                                <p className="text-base text-white pt-2 font-medium leading-[30px] "></p>
                            </div>
                        </div>
                        
                    </div>



                    <div className=" overflow-none sm:w-[100%] ">
                        <div className="relative group overflow-hidden ">
                            <img src={building} alt="building" className="w-[100%]  object-cover  h-[550px] grayscale" />
                            <div className="">
                                <div className="hoverColor  element  p-4 h-[100%]  absolute w-[100%] top-0 mdsm:p-4 ">
                                    <div className="cardHeader ">
                                        <h4 className="text-white primaryHover sub-heading px-4 text-center absolute top-[15%]  tracking-wider py-2 text-[26px] sm:text-[18px]"> Lorem ipsum</h4>
                                    </div>
                                    <div className="cardElemts">
                                        <div className="absolute  top-[40%]">
                                            <div className="w-[100%] pb-4 flex">
                                                <div className="w-[5%] ">
                                                    <VscDebugBreakpointLogUnverified className="text-primary text-h4" />
                                                </div>
                                                <div className="w-[95%]">
                                                    <p className="text-white flex pl-4 text-[16px] tracking-wider leading-[26px] sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                </div>
                                            </div>

                                            <div className="w-[100%] pb-4 flex">
                                                <div className="w-[5%] ">
                                                    <VscDebugBreakpointLogUnverified className="text-primary text-h4" />
                                                </div>
                                                <div className="w-[95%]">
                                                    <p className="text-white flex pl-4 text-[16px] tracking-wider leading-[26px] sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                                                </div>
                                            </div>

                                            <div className="w-[100%] pb-4 flex">
                                                <div className="w-[5%] ">
                                                    <VscDebugBreakpointLogUnverified className="text-primary text-h4" />
                                                </div>
                                                <div className="w-[95%]">
                                                    <p className="text-white flex pl-4 text-[16px] tracking-wider leading-[26px] sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                    <div className=" overflow-none sm:w-[100%] ">
                        <div className="relative group overflow-hidden ">
                            <img src={airport} alt="airport" className="w-[100%]  object-cover  h-[550px] grayscale" />
                            <div className="">
                                <div className="hoverColor  element  p-4 h-[100%]  absolute w-[100%] top-0 mdsm:p-4 ">
                                    <div className="cardHeader ">
                                        <h4 className="text-white primaryHover sub-heading px-4 text-center absolute top-[15%]  tracking-wider py-2 text-[26px] sm:text-[18px]"> Lorem ipsum</h4>
                                    </div>
                                    <div className="cardElemts">
                                        <div className="absolute  top-[40%]">
                                            <div className="w-[100%] pb-4 flex">
                                                <div className="w-[5%] ">
                                                    <VscDebugBreakpointLogUnverified className="text-primary text-h4" />
                                                </div>
                                                <div className="w-[95%]">
                                                    <p className="text-white flex pl-4 text-[16px] tracking-wider leading-[26px] sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                </div>
                                            </div>

                                            <div className="w-[100%] pb-4 flex">
                                                <div className="w-[5%] ">
                                                    <VscDebugBreakpointLogUnverified className="text-primary text-h4" />
                                                </div>
                                                <div className="w-[95%]">
                                                    <p className="text-white flex pl-4 text-[16px] tracking-wider leading-[26px] sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                                                </div>
                                            </div>

                                            <div className="w-[100%] pb-4 flex">
                                                <div className="w-[5%] ">
                                                    <VscDebugBreakpointLogUnverified className="text-primary text-h4" />
                                                </div>
                                                <div className="w-[95%]">
                                                    <p className="text-white flex pl-4 text-[16px] tracking-wider leading-[26px] sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                                                </div>
                                            </div>

                                            <div className="w-[100%] pb-4 flex">
                                                <div className="w-[5%] ">
                                                    <VscDebugBreakpointLogUnverified className="text-primary text-h4" />
                                                </div>
                                                <div className="w-[95%]">
                                                    <p className="text-white flex pl-4 text-[16px] tracking-wider leading-[26px] sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

              


                    <div className=" overflow-none sm:w-[100%] ">
                        <div className="relative group overflow-hidden ">
                            <img src={books} alt="books" className="w-[100%]  object-cover  h-[550px] grayscale" />
                            <div className="">
                                <div className="hoverColor  element  p-4 h-[100%]  absolute w-[100%] top-0 mdsm:p-4 ">
                                    <div className="cardHeader ">
                                        <h4 className="text-white primaryHover sub-heading px-4 text-center absolute top-[15%]  tracking-wider py-2 text-[26px] sm:text-[18px]"> Lorem ipsum</h4>
                                    </div>
                                    <div className="cardElemts">
                                        <div className="absolute  top-[40%]">
                                            <div className="w-[100%] pb-4 flex">
                                                <div className="w-[5%] ">
                                                    <VscDebugBreakpointLogUnverified className="text-primary text-h4" />
                                                </div>
                                                <div className="w-[95%]">
                                                    <p className="text-white flex pl-4 text-[16px] tracking-wider leading-[26px] sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                </div>
                                            </div>

                                            <div className="w-[100%] pb-4 flex">
                                                <div className="w-[5%] ">
                                                    <VscDebugBreakpointLogUnverified className="text-primary text-h4" />
                                                </div>
                                                <div className="w-[95%]">
                                                    <p className="text-white flex pl-4 text-[16px] tracking-wider leading-[26px] sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                                                </div>
                                            </div>

                                            <div className="w-[100%] pb-4 flex">
                                                <div className="w-[5%] ">
                                                    <VscDebugBreakpointLogUnverified className="text-primary text-h4" />
                                                </div>
                                                <div className="w-[95%]">
                                                    <p className="text-white flex pl-4 text-[16px] tracking-wider leading-[26px] sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className=" overflow-none sm:w-[100%] ">
                        <div className="relative group overflow-hidden ">
                            <img src={music} alt="music" className="w-[100%]  object-cover  h-[550px] grayscale" />
                            <div className="">
                                <div className="hoverColor  element  p-4 h-[100%]  absolute w-[100%] top-0 mdsm:p-4 ">
                                    <div className="cardHeader ">
                                        <h4 className="text-white primaryHover sub-heading px-4 text-center absolute top-[15%]  tracking-wider py-2 text-[26px] sm:text-[18px]"> Lorem ipsum</h4>
                                    </div>
                                    <div className="cardElemts">
                                        <div className="absolute  top-[40%]">
                                            <div className="w-[100%] pb-4 flex">
                                                <div className="w-[5%] ">
                                                    <VscDebugBreakpointLogUnverified className="text-primary text-h4" />
                                                </div>
                                                <div className="w-[95%]">
                                                    <p className="text-white flex pl-4 text-[16px] tracking-wider leading-[26px] sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                </div>
                                            </div>

                                            <div className="w-[100%] pb-4 flex">
                                                <div className="w-[5%] ">
                                                    <VscDebugBreakpointLogUnverified className="text-primary text-h4" />
                                                </div>
                                                <div className="w-[95%]">
                                                    <p className="text-white flex pl-4 text-[16px] tracking-wider leading-[26px] sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </Layout>
        </div>
    )
}
