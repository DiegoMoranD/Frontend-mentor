import { Header } from "./components/Cabeza"
import { MainComponent } from "./components/MainComponent"
import { NewConteiner } from "./components/NewConteiner"
import { ArticlesConteiner } from "./components/ArticlesConteiner"

function page() {
  return (
    <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-20">
      <Header/>
      <div className="md:flex md:gap-8 md:mb-10">
        <MainComponent/>
        <NewConteiner/>
      </div>
      <ArticlesConteiner/>
    </main>
  )
}

export default page