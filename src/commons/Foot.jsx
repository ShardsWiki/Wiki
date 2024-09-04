import React from 'react';
import '../css/Foot.css';

export default function Foot() {
  return (
    <footer className="foot text-center">
            <div className="container">
                <section>
                    <div className="row text-center d-flex justify-content-center pt-3">
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="/" className="text-decoration-none">About Us</a>
                            </h6>
                        </div>

                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="/" className="text-decoration-none">------</a>
                            </h6>
                        </div>

                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="/" className="text-decoration-none">Ayuda</a>
                            </h6>
                        </div>

                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="/" className="text-decoration-none">Contacto</a>
                            </h6>
                        </div>
                    </div>
                </section>

                <hr className="my-2"/>

                <section className="mt-3">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Wiki Pokemon Shards 
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="text-center p-3">
                © 2024 Copyright: https://shardswiki.netlify.app/
            </div>
        </footer>
  )
}
