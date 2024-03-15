    
    const Block = ({svg, type, hr1, hr2, bgCard}) => {
        return(
            <>
                <div className=' relative mt-28 xl:w-[240px] xl:h-[244px] xl:m-[24px]'>
                    <div className={`${bgCard} rounded-t-2xl h-20 overflow-hidden`}>
                        {svg}
                    </div>

                    <div className=' bg-DarkBlue flex flex-col h-32 justify-between p-6 rounded-2xl absolute w-[100%] xl:h-[200px] xl:-bottom-[10px] -bottom-20 hover:bg-DesaturatedBlue cursor-pointer transition-colors duration-500'>
                        <div className=' flex items-center justify-between'>
                            <p className=' font-medium text-[1.1em] text-white'>{type}</p>
                            <p>
                                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                            </p>
                        </div>
                        <div className='flex items-center justify-between xl:h-[300px] xl:flex-col xl:items-start xl:p-5 xl:px-0'>
                            <p className=' text-[2em] text-white font-light'>{hr1}</p>
                            <p>{hr2}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default Block