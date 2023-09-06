import React from 'react'
import Layout from '../layout/Layout'
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonial() {
  return (
    <div>
       <Layout>
       <div className=' grid grid-cols-3 gap-8 my-8'>
                <div className=' group p-10 hover:bg-[#7c0201db] duration-300 rounded-[10px]'>
                    <FaQuoteLeft className=' text-[#7c0201db] group-hover:text-white text-h3' />
                    <div className=' text-base pt-6 group-hover:text-white '>
                        As the MBA Director of this esteemed institution, I am happy to be a part of crafting a dynamic curriculum, prioritizing student welfare, and fostering valuable industry connections.
                    </div>
                    <div className=' py-8  group-hover:text-white'>
                        <div className=' '> Dr. Thulasivelu</div>
                        <div className=' text-[14px] font-semibold group-hover:font-normal'>    Director</div>
                    </div>
                </div>
                <div className=' group p-10 hover:bg-[#7c0201db] bg-[#f2f2f2] duration-300 rounded-[10px]'>
                    <FaQuoteLeft className=' text-[#7c0201db] group-hover:text-white text-h3' />
                    <div className=' text-base pt-6 group-hover:text-white'>
                        I am delighted to be a part of RVS IMSR; offering academic guidance to TECH MBA students and assisting faculty members in their teaching endeavors brings me tremendous joy.
                    </div>
                    <div className=' py-8  group-hover:text-white'>
                        <div className=' '> Dr. Kanakaraj N</div>
                        <div className=' text-[14px] font-semibold group-hover:font-normal'>     Academic Coordinator</div>
                    </div>

                </div>
                <div className='group   bg-[#7c0201db]  p-10 rounded-[10px]'>
                    <FaQuoteLeft className=' text-white text-h2' />
                    <div className=' text-base pt-6 text-white'>
                    My area of interest includes Marketing Management, Sales Management, Integrated Marketing Communication, & Retail Management. These subjects provide valuable skills and knowledge, benefiting students in their careers.
                    </div>
                    <div className=' py-8  text-white'>
                        <div className=' '> Dr.S. Suganya</div>
                        <div className=' text-[14px] '>Assistant Professor</div>
                    </div>
                </div>

                <div className=' group p-10 hover:bg-[#7c0201db] bg-[#f2f2f2]  duration-300 rounded-[10px]'>
                    <FaQuoteLeft className=' text-[#7c0201db] group-hover:text-white text-h3' />
                    <div className=' text-base pt-6 group-hover:text-white'>
                    My passion lies in finance, specifically Accounting and Finance. I'm drawn to this field because it lets me understand financial decision-making and share vital knowledge with students.
                    </div>
                    <div className=' py-8  group-hover:text-white'>
                        <div className=' '> Dr.A. Rajamani</div>
                        <div className=' text-[14px] font-semibold group-hover:font-normal'>Assistant Professor</div>
                    </div>
                  
                </div>
                <div className='group   bg-[#7c0201db] p-10 rounded-[10px]'>
                    <FaQuoteLeft className=' text-white text-h2' />
                    <div className=' text-base pt-6 text-white'>
                    I am passionate about imparting real-world knowledge and valuable insights to aspiring marketing professionals, empowering them to thrive in digital marketing.
                    </div>
                    <div className=' py-8  group-hover:text-white'>
                        <div className=' text-white'> Mr. Vengatesan Sivaramakrishnan</div>
                        {/* <div className=' text-[14px] font-semibold group-hover:font-normal'>Assistant Professor</div> */}
                    </div>
                </div>
                <div className=' group p-10 hover:bg-[#7c0201db] duration-300 rounded-[10px]'>
                    <FaQuoteLeft className=' text-[#7c0201db] group-hover:text-white text-h3' />
                    <div className=' text-base pt-6 group-hover:text-white'>
                    Being an HR Faculty at RVS IMSR, I take great joy in fostering a vibrant learning space for students while sharing my wealth of experience gained from diverse HR domains.
                    </div>
                    <div className=' py-8  group-hover:text-white'>
                        <div className=' '> Mr.S. Mohammed Al Basidh</div>
                        <div className=' text-[14px] font-semibold group-hover:font-normal'>Assistant Professor</div>
                    </div>
                </div>

           

            </div>
        </Layout>
    </div>
  )
}
