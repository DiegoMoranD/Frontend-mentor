
import Image from "next/image"

export const MainComponent = () => {
  return (

<section className='mb-12 md:mb-0'>
  <picture>
    <source media="(max-width: 640px)" srcSet='/imgs/img1/sadmangMB.jpg'/>
    <source media="(min-width: 641px)" srcSet='/imgs/img1/sadmangPC.jpg'/>
    <Image src='/imgs/img1/sadmangMB.jpg' alt="a" width={1280} height={600}/>
  </picture>

<div className='sm:flex'>
  <div className='flex-1 py-6'>
    <h2 className='text-[25px] leading-none font-bold sm:text-[48px]'>¿Deseas perder tu estabilidad emocional?</h2>
  </div>

  <div className='flex-1 pt-9'> 
    <p className='mb-10 text-[13px] sm:text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid vitae libero. Quaerat,  dolorum neque labore maiores mollitia nulla debitis quia magnam iusto velit doloremque sequi quos esse perspiciatis nobis.</p>
    <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue transition-colors duration-500'>Saber más</button>
  </div>
</div> 

</section>
  )
}
