import React, { useState, useEffect } from "react";

export function CategoriaConProductos({ children }) {
  const [categoriaConProductos, setCategoriaConProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/api/categorias/productos')
      .then((res) => res.json())
      .then((data) => {
        setCategoriaConProductos(data);
      });
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className=" text-center m-0 font-weight-bold text-primary">{children}</h6>
        </div>
        <div className="card-body">
          <div className="row">
            {categoriaConProductos.map((categoria, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                  <div className="card-body">
                    <h3 className="text-center font-weight-bold">
                    {categoria.nombre}
                    </h3>
                    {categoria.juegos.map((juego, juegoIndex) => (
                      <div key={juegoIndex}>
                        {juego.nombre}
                      </div>
                    ))}
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