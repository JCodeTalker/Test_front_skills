import "./style.scss"
import aspec from '../../assets/logo-aspec.png'
export function Header() {
  return (
    <div className="container" >
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom" id="main-header">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <img src={aspec} alt="" className="bi me-2" height="52" />
          <span className="fs-4">Brand Name</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Product</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </header>
    </div>
  )
}