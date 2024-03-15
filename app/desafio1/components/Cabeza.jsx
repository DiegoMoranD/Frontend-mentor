import {NavBar} from './NavBar'
import Image from 'next/image'

export const Header = () => {
    return(
        <header className="flex place-content-between items-center mb-8">
            <Image src='/imgs/img1/logo.png' width={500} height={500}alt="molil" className='size-14'/>
            <NavBar/>
        </header>
    )
}
