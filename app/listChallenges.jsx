import React from 'react'
import Link from 'next/link'

function listChallenges() {
  return (
    <div>
        <div className=' bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
            <h1 className=' text-4xl text-white font-bold text-center mb-6'>Lista de desafios</h1>
            <div>
              <Link href={'/desafio1'}>
              <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 font-semibold'>
                Desafio 1
              </button>
              </Link>
            </div>

            <div>
              <Link href={'/desafio2'}>
              <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 font-semibold'>
                Desafio 2
              </button>
              </Link>
            </div>

            <div>
              <Link href={'/desafio3'}>
              <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 font-semibold'>
                Desafio 3
              </button>
              </Link>
            </div>
          
        </div>
    </div>
  )
}

export default listChallenges