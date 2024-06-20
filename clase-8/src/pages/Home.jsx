import { useState, useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductosContext } from '../context/ProductosContext'
const Home = () => {
    const { productos, loading, handleDelete } = useContext(ProductosContext);

    return (
        <div>
        {loading ? (
            <h1>Cargando...</h1>
        ) : (
            <>
                <h1 className="text-center mt-4">Listado de productos</h1>
                <table className="container table table-striped mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos?.map(producto => (
                            <tr key={producto.id}>
                                <td>{producto.name}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.descripcion}</td>
                                <td className="d-flex gap-2">
                                    <Link
                                        to={`/editarProducto/${producto.id}`}
                                        className="btn btn-warning"
                                    >
                                        Editar
                                    </Link>
                                    <button
                                        className="btn btn-danger me-2"
                                        onClick={() => handleDelete(producto.id)}
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )}
    </div>
    )
}

export default Home
