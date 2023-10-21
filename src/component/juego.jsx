import { useState, useEffect } from "react";

export function Juego({ children }) {

    const [cantidadJuegos, setCantidadJuegos] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3030/api/productos')
            .then((res) => res.json())
            .then((json) => {
                setCantidadJuegos(json.count)
            })
    }, [])

    return (
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {children} </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidadJuegos}</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>)
}