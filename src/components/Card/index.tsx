// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/css/'
import './styles.scss'
import icon from './icon.svg'

type cardProps = {
  title: string,
  paragraph: string
}

const Card = function ({ ...props }: cardProps) {
  return (
    <div className="card p-3 m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <img src={icon} alt="" />
        <h3 className="card-title my-2">{props.title}</h3>
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <p className="card-text">{props.paragraph} </p>
        {/* <a href="#" className="card-link">Card link</a> */}
        {/* <a href="#" className="card-link">Another link</a> */}
      </div>
    </div>
  )
}

export default Card