import React from 'react'
import UserContainer from './UserContainer'

function page() {
  return (
    <body className=' bg-VeryDarkBluey text-PaleBlue p-0 m-0'> 
        <main className=' w-[328px] h-[58px] mx-auto m-[58px] xl:w-[1150px] xl:flex  xl:mx-auto'> {/*main-container*/}
        <UserContainer></UserContainer>
        </main>
    </body>
    
  )
}

export default page