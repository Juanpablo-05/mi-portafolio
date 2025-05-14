const logo = [
    '/src/public/logos/react-logo.svg',
    '/src/public/logos/typescript-logo.svg',
    '/src/public/logos/javascript-logo.svg',
    '/src/public/logos/css3-logo.svg',
    '/src/public/logos/html-logo.svg',
    '/src/public/logos/tailwind-logo.svg',
    '/src/public/logos/github-logo.svg',
]

function Carousel() {
  return (
    <div className="about_caorousel">
        <div className="carousel_track">
              {
                [...logo, ...logo].map((item, i) =>(
                          <img src={item} alt="tech logo" className="carousel-logo" key={i} /> 
                ))
              }
        </div>
    </div>
  )
}

export default Carousel