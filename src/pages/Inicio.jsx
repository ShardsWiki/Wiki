import React from 'react'
import '../css/Inicio.css';

export default function Inicio() {
  return (
    <div className="inicio container">
        <div id="photoCarousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#photoCarousel" data-bs-slide-to="0" className='list-unstyled active'></li>
                    <li data-bs-target="#photoCarousel" data-bs-slide-to="1" className='list-unstyled'></li>
                    <li data-bs-target="#photoCarousel" data-bs-slide-to="2" className='list-unstyled'></li>
                </ol>
                <div className="carousel-inner rounded fotos">
                    <div className="carousel-item active">
                        <img src="https://pbs.twimg.com/media/GQ3hEatXgAAzbJz?format=png&name=large" className="d-block w-100" alt="1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://pbs.twimg.com/media/GQ3h8oIW4AATtow?format=png&name=large" className="d-block w-100" alt="2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://pbs.twimg.com/media/GVDSNolXYAAc0i3?format=jpg&name=large" className="d-block w-100" alt="3"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#photoCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#photoCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
    </div>
  )
}
