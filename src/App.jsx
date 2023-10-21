import { useState } from 'react'
import './App.css'
import { Juego } from './component/juego'
import { Usuario } from './component/usuario'
import { Categoria } from './component/categoria'
import { UltimoJuego } from './component/ultimoJuego'
 
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
              <span>Dashboard</span></a>
          </li>

          <hr className="sidebar-divider"></hr>

          <div className="sidebar-heading">Actions</div>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/">
              <i className="fas fa-fw fa-folder"></i>
              <span>Pages</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Charts</span></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-table"></i>
              <span>Tables</span></a>
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
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                    <img className="img-profile rounded-circle" src="assets/images/Logo_GQS.png" width="60"></img>
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
                  <UltimoJuego><p>Ultimo juego creado</p></UltimoJuego>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 01
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 02
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 03
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 04
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 05
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 06
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Dashboard 2020</span>
              </div>
            </div>
          </footer>

        </div>

      </div>
    </>
  )
}

export default App
