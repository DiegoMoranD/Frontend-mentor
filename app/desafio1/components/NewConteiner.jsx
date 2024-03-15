import { NewArticle } from "./NewArticle";

export const NewConteiner = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] flex-none mb-[60px] md:w-[350px] md:mb-0">
        <h2 className="text-SoftOrange text-4xl font-bold">Nuevos</h2>
        <NewArticle
            title = 'Chainsaw Man'
            text = 'De tener una mala vida a una peor'
        />
        <NewArticle
            title = 'Jujutsu Kaisen'
            text = 'No te encariñes de ningun personaje'
        />
        <NewArticle
            title = 'Bersek'
            text = 'No creo que se ponga más feo'
        />
    </aside>
  )
}
