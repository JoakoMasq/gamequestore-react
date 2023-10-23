import { useState } from 'react'
import './App.css'
import { Juego } from './component/juego'
import { Usuario } from './component/usuario'
import { Categoria } from './component/categoria'
import { UltimoJuego } from './component/ultimoJuego'
import { UltimoUsuario } from './component/ultimoUsuario'
import { CategoriaConProductos } from './component/categoriaConProductos'
import { JuegoDetalle } from './component/JuegoDetalle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="wrapper">
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Admin</div>
          </a>
          <hr className="sidebar-divider my-0"></hr>
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Page</span></a>
          </li>
          <hr className="sidebar-divider"></hr>
          <div className="sidebar-heading">Actions</div>
          <li className="nav-item">
            <a className="nav-link collapsed" href="http://localhost:3030/product/create">
              <i className="fas fa-fw fa-folder"></i>
              <span>Crear Juego</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:3030/register">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Registrar Usuario</span></a>
          </li>
          <hr className="sidebar-divider d-none d-md-block"></hr>
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
              </button>

              <ul className="navbar-nav ml-auto">

                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                    <i className="fas fa-bell fa-fw"></i>
                    <span className="badge badge-danger badge-counter">3+</span>
                  </a>
                </li>

                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                    <i className="fas fa-envelope fa-fw"></i>
                    <span className="badge badge-danger badge-counter">7</span>
                  </a>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                <li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                    <span className="mr-2 d-none d-lg-inline text-gray-900 small">GQS</span>
                    <img className="img-profile rounded-circle" src="https://res.cloudinary.com/ddczp5dbb/image/upload/v1697946291/GQS_y9kd2k.png" width="60"></img>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Game Questore</h1>
              </div>

              <div className="row">
                <div className="col-md-4 mb-4">
                  <Juego><p>Cantidad de Juegos</p></Juego>
                </div>

                <div className="col-md-4 mb-4">
                  <Usuario><p>Cantidad de Usuarios</p></Usuario>
                </div>

                <div className="col-md-4 mb-4">
                  <Categoria><p>Cantidad de Categorias</p></Categoria>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-4">
                  <UltimoJuego><h3>Ultimo juego creado</h3></UltimoJuego>
                </div>

                <div className="col-lg-6 mb-4">
                  <UltimoUsuario><h3>Ultimo usuario creado</h3></UltimoUsuario>
                </div>

                <CategoriaConProductos><h3>Categoria con sus Juegos</h3></CategoriaConProductos>

                <JuegoDetalle><h3>Listado de Juegos</h3></JuegoDetalle>
              </div>
            </div>

            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Dashboard 2023</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
