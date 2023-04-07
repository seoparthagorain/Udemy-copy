import React from 'react'

function Hero() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner" >
        <div className="carousel-item active" id="carousel-set">
          <img src="https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-md-block">

            <div className="Div2" >
              <img src="https://mentogram.com/wp-content/uploads/2022/08/GIF-220913_145136.gif" id="IMG1" alt="not fond" />
            </div>
            <div className="Div3">
              <h1>welcome udamy</h1>
              <p>With Personal Plan, you get access to 8,000 of our top-rated courses in tech, business, and more.</p>
              <form>
                <button type="button" className="btn btn-primary me-md-3">Primary</button>
              </form>
            </div>

          </div>
        </div>
        <div className="carousel-item" id="carousel-set">
          <img src="https://images.pexels.com/photos/250609/pexels-photo-250609.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." />
          <div className="carousel-caption  d-md-block">
            <div className="Div2" >
              <img src="https://mentogram.com/wp-content/uploads/2022/08/GIF-220913_145136.gif" id="IMG1" alt="not fond" />
            </div>
            <div className="Div3">
              <h1>welcome udamy</h1>
              <p>With Personal Plan, you get access to 8,000 of our top-rated courses in tech, business, and more.</p>
              <form>
                <button type="button" className="btn btn-primary me-md-3">Primary</button>
              </form>
            </div>
          </div>
        </div>
        <div className="carousel-item" id="carousel-set">
          <img src="https://images.pexels.com/photos/16129724/pexels-photo-16129724.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." />
          <div className="carousel-caption  d-md-block" >
            <div className="Div2" >
              <img src="https://mentogram.com/wp-content/uploads/2022/08/GIF-220913_145136.gif" id="IMG1" alt="not fond" />
            </div>
            <div className="Div3">
              <h1>welcome udamy</h1>
              <p>With Personal Plan, you get access to 8,000 of our top-rated courses in tech, business, and more.</p>
              <form>
                <button type="button" className="btn btn-primary me-md-3">Primary</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Hero