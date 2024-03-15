

export const NavBar = () => {

  return (
    <>
    <ul className={` absolute bg-white top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px]`}>
        <li className={` cursor-pointer sm:hidden  flex place-content-end`}>
          {/* <img className='w-8 h-8 mb-[87px]' src={closeBtn} onClick={handleClick} alt="" /> */}
          <p className="w-8 h-8 mb-[87px]">
          <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
          </p>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed sm:text-4 font-semibold transition-colors duration-500' href="#">Inicio</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed font-semibold transition-colors duration-500' href="#">Nuevo</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed font-semibold transition-colors duration-500' href="#">Popular</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed font-semibold transition-colors duration-500' href="#">Trending</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed font-semibold transition-colors duration-500' href="#">Categorias</a>
        </li>
      </ul>
    {/* <img className={`${menuClicked ? '' : 'hidden'} w-10 h-4 cursor-pointer sm:hidden`} src={burgerMenu} onClick={handleClick} alt="" /> */}
    </>
  )
}

export default NavBar