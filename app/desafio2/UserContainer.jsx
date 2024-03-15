import React from 'react'
import Image from 'next/image'
import Block from './Datedata'


function UserContainer() {
  return (
    <>
        <section className='relative xl:pt-6 xl:w-[288px] xl:h-[564px] '> {/*first-section*/}
            <div className=''>
                <div className=' bg-Blue flex rounded-2xl p-[30px] absolute w-[100%] z-[1] xl:h-[355px] xl:flex-col'> {/*main-card__user*/}
                    <Image src="/imgs/dev2/image-jeremy.png" alt="ss" width={400} height={400} className=' w-[72px] mr-3 ring-2 ring-white border rounded-full xl:w-[85px] xl:mb-[45px]'></Image>
                    <div>
                        <p className=' font-semibold mt-3 ml-1 my-0 xl:text-base'>Reporte de</p>
                        <p className=' text-[1.5em] font-light text-white xl:text-2xl'>Jeremy Robson</p> 
                    </div>
                </div>

                <div className=' bg-DarkBlue flex rounded-2xl justify-around h-[100px] items-center text-[1.1em] absolute w-[100%] top-[105px] pt-9 xl:mt-[265px] xl:h-[200px] xl:flex-col xl:p-10 xl:px-8 xl:py-[24px]'>
                    <p id='daily' className=' cursor-pointer hover:text-white hover:font-semibold transition-colors duration-500'>Diario</p>
                    <p id='weekly' className=' cursor-pointer hover:text-white hover:font-semibold transition-colors duration-500'>Semanal</p>
                    <p id='monthly' className=' cursor-pointer hover:text-white hover:font-semibold transition-colors duration-500'>Mensual</p>
                </div>
            </div>  
        </section>

        <section className=' pt-32 xl:h-[564px] xl:w-[860px] grid xl:grid-cols-3 xl:pt-0 xl:p-6 '>
            <Block
                bgCard='bg-[#ff8b64]'
                svg = ''
                type = 'Trabajo'
                hr1 = '8 hrs' 
                hr2 = 'Previa - 7 hrs'
            />

            <Block 
                bgCard = 'bg-[#56c2e6]'
                svg = ''
                type = 'Jugando'
                hr1 = '3 hrs' 
                hr2 = 'Previa - 1 hrs'
            />

            <Block
                bgCard = 'bg-[#ff5e7d]'
                svg = ''
                type = 'Ejercicio'
                hr1 = '2 hrs' 
                hr2 = 'Previa - 2 hrs'
            />

            <Block
                bgCard = 'bg-[#4bcf83]'
                svg = ''
                type = 'Personal'
                hr1 = '3 hrs' 
                hr2 = 'Previa - 7 hrs'
            />

            <Block
                bgCard = 'bg-[#4bcf83]'
                svg = ''
                type = 'Estudiando'
                hr1 = '4 hrs' 
                hr2 = 'Previa - 5 hrs'
            />

            <Block
                bgCard = 'bg-[#f1c75b]'
                svg = ''
                type = 'Social'
                hr1 = '4 hrs' 
                hr2 = 'Previa - 9 hrs'
            />
        </section>
    </>
  )
}

export default UserContainer