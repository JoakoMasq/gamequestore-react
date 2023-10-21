import { useState, useEffect } from "react";

export function Usuario({ children }) {

    const [cantidadUsuarios, setCantidadUsuarios] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3030/api/usuarios')
            .then((res) => res.json())
            .then((json) => {
                setCantidadUsuarios(json.count)
            })
    }, [])

    return (
        <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> {children} </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidadUsuarios}</div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>)
}