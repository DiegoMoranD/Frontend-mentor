import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <body className=' h-full w-full m-0 p-0 bg-VeryDarkBlue'>
    <main className='h-[782px] w-[328px] bg-DesaturatedBlue m-[88px] mx-auto rounded-md overflow-hidden xl:w-[1110px] xl:h-[448px] xl:flex xl:flex-row-reverse xl:m-[178px] xl:mx-auto'>
        <section className=' '>
            <div className=" bg-dev3 bg-cover w-full h-[240px] xl:w-[540px] xl:h-[100%] xl:bg-dev3Pc">
                <div className=' bg-Layer w-full h-full'></div>
            </div>
        </section>

        <section className=' p-9 px-[33px] text-center xl:p-[75px] xl:px-[70px] xl:text-left'>
        <h1 className=' text-white text-[1.8em] h-[115px] xl:text-[2.5em]'>Get 
        <span className=' text-violet-600'> insights</span> that help your business grow.</h1>

        <p className=' my-5 text-[1em] leading-6 h-[137px] text-SlightlyTransparentP xl:mr-[70px]'>Discover the benefits of data analytics and make better decisions regarding revenue, customer 
            experience, and overall efficiency.</p>

        <div className=" text-SlightlyTransparentS leading-6 xl:flex xl:justify-between xl:mr-[70px]">
            <div className="stats-details">
            <div className=" font-bold text-[1.45em] text-white">10k+</div>
            <div className="  text-[0.8em] mb-[33px] uppercase">companies</div>
            </div>
            <div className="stats-details">
            <div className="font-bold text-[1.45em] text-white">314</div>
            <div className=" text-[0.8em] mb-[33px] uppercase">templates</div>
            </div>
            <div className="stats-details">
            <div className="font-bold text-[1.45em] text-white uppercase">12m+</div>
            <div className="text-[0.8em] mb-[33px] uppercase">queries</div>
            </div>
        </div>
        </section>
    </main>
    </body>
  )
}

export default page