import { useState, useEffect } from 'react';

export function UltimoJuego() {
  const [ultimoJuego, setUltimoJuego] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3030/api/productos')
      .then((response) => response.json())
      .then((data) => {
        
        const ultimoJuego = data.products[data.products.length - 1];
        setUltimoJuego(ultimoJuego);
      })
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
      </div>
      <div className="card-body">
        {ultimoJuego ? (
          <>
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: '25rem' }}
                src={ultimoJuego.url_imagen}
                alt={ultimoJuego.nombre}
              />
            </div>
            <p className="text-center">{ultimoJuego.descripcion}</p>
            <a href={`http://localhost:3030/product/detalle/${ultimoJuego.id}`} target="_blank">
                 Detalle del producto
            </a>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}