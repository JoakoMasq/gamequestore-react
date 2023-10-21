import { useState, useEffect } from "react";

export function CategoriaConProductos ({children}) {

    const [ categoriaConProductos, setCategoriaConProductos] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3030/api/productos/categorias/${categoryId}`)
        .then((res) => res.json())
        .then((data) => {
            setCategoriaConProductos(data);
        })
    },[])
}