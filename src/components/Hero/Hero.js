import './Hero.css'

function Hero(props) {
  console.log(props)
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.cover} alt='' />
      <h2>{props.description}</h2>
    </div>
  )
}

/* L'hero è un banner contenente un'immagine e del testo.
Su mobile viene visualizzato un title (h1) e sotto un immagine.
![hero mobile](images/1-hero-mobile.svg)
Su tablet e desktop vengono visualizzati title (h1) e description (h2), sovrapposti all'immagine.
![hero desktop](images/1-hero-desktop.svg) */

export default Hero
