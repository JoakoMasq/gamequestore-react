import { useState, useEffect } from 'react';

export function UltimoUsuario({ children }) {
  const [ultimoUsuario, setUltimoUsuario] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3030/api/usuarios')
      .then((response) => response.json())
      .then((data) => {
        if (data.users && data.users.length > 0) {
          const ultimo = data.users[data.users.length - 1];
          setUltimoUsuario(ultimo);
        }
      });
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">{children}</h6>
      </div>
      
      <div className="card-body">
        {ultimoUsuario ? (
          <>
          <h3 className="text-center m-0 font-weight-bold text-primary">{ultimoUsuario.nombre}</h3>
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: '25rem' }}
                src={ultimoUsuario.avatar}
                alt={ultimoUsuario.nombre}
              />
              <h6 className="text-center m-0 font-weight-bold text-primary">{ultimoUsuario.email}</h6>
              <h6 className="text-center m-0 font-weight-bold text-primary">{ultimoUsuario.dni}</h6>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}