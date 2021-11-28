import './styles.scss'
import icon from './icon.svg'

type cardProps = {
  title: string,
  paragraph: string
}

const Card = function ({ ...props }: cardProps) {
  return (
    <div className="card card2 p-3 m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <img src={icon} alt="" />
        <h3 className="card-title my-2">{props.title}</h3>
        <p className="card-text">{props.paragraph} </p>
      </div>
    </div>
  )
}

export default Card