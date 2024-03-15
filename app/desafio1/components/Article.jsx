import Image from "next/image"
// eslint-disable-next-line react/prop-types
const Article = ({img, numbre, title, text}) => {
  return (
    <article className='h-[162px] flex-none flex md:pr-[54px] md:w-[343px] md:flex-grow'>
        <div className='w-[100px] flex-none'>
            <Image src={img} alt="image" width={500} height={500}></Image>
        </div>
        <div className=' pl-6'>
            <p className=' text-GrayishBlue mb-[18px] text-3xl font-bold'>{numbre}</p>
            <h2 className=' font-bold mb-[18px] hover:text-SoftOrange cursor-pointer sm:text-[14px]'>{title}</h2>
            <p className='text-GrayishBlue text-[14px] sm:text-[13px]'>{text}</p>
        </div>
    </article>
  )
}

export default Article