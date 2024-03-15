import Article from "./Article"

export const ArticlesConteiner = () => {

 

  return (
    <section className="md:flex md:flex-wrap md:place-content-between md:gap-10 md:justify-center">

        <Article
            img='/imgs/img1/pumpum.jpg'
            number='01'
            title='Godnight PUM PUM'
            text='Lorem ipsum dolor, sit amet consectetur'
        />
        <Article
            img='/imgs/img1/Koe.jpg'
            number='02'
            title='A silent voice'
            text='Lorem ipsum dolor, sit amet consectetur'
        />
        <Article
            img='/imgs/img1/Liar_Game.png'
            number='03'
            title='Liar Game'
            text='Lorem ipsum dolor, sit amet consectetur'
        />
    </section>
  )
}
