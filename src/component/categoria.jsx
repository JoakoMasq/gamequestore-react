import { useState, useEffect } from "react";

export function Categoria ({children}) {

    const [ cantidadCategoria, setCantidadCategoria ] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3030/api/categorias')
            .then((res) => res.json())
            .then((json) => {
                setCantidadCategoria(json.count)
            })

    },[])

        return (
            <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">{children}</div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidadCategoria}</div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-user-check fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
        )
}