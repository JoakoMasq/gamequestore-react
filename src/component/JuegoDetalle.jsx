import React, { useState, useEffect } from "react";

export function JuegoDetalle({ children }) {
    const [juegoDetalle, setJuegoDetalle] = useState({ products: [] });

    useEffect(() => {
        fetch('http://localhost:3030/api/productos')
            .then((res) => res.json())
            .then((data) => {
                setJuegoDetalle(data);
            });
    }, []);

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="text-center m-0 font-weight-bold text-primary">{children}</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {juegoDetalle.products.map((juego, juegoIndex) => (
                            <div key={juegoIndex} className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body">
                                        <h3 className="text-center font-weight-bold">
                                            {juego.nombre}
                                        </h3>
                                        <div className="text-center">
                                        <a href={`http://localhost:3030/product/detalle/${juego.id}`} target="_blank">
                                            <img
                                                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                                style={{ width: '25rem' }}
                                                src={juego.url_imagen}
                                                alt={juego.nombre}

                                            />
                                            </a>
                                        </div>
                                        <h4 className="text-center">${juego.precio}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}