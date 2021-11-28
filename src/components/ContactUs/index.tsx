import './styles.scss'
export function ContactUs() {
  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-md-6 text-nowrap">
          <h3 className="fw-bold" style={{ color: '#252B42' }}>
            Consulting Agency For Your Business
          </h3>
          <p>the quick fox jumps over the lazy dog</p>
        </div>
        <div className="col-md-3 left-100">
        </div>
        <div className="col-md-3 left-100">
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </div>
  )
}