import "./style.css"
export function Header() {
  return (
    // <header>
    //   <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">Carousel</a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarCollapse">
    //         <ul className="navbar-nav me-auto mb-2 mb-md-0">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">Home</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">Link</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link disabled">Disabled</a>
    //           </li>
    //         </ul>
    //         <form className="d-flex">
    //           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //           <button className="btn btn-outline-success" type="submit">Search</button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    // </header>


    // --------------------------------------------------------------------------------



    <div className="container" >
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
          <span className="fs-4">Brand Name</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        </ul>
      </header>
    </div>
  )
}