// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/css/'
import './styles.css'
import icon from './icon.svg'

const Card = function () {
  return (
    <div className="card" style={{ width: "18rem;" }}>
      <div className="card-body">
        <img src={icon} alt="" />
        <h5 className="card-title">Card title</h5>
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
  )
}

export default Card