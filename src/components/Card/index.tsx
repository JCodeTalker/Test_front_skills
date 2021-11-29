import './styles.scss'
import icon from './icon.svg'
import icon2 from './icon-2.svg'

type cardProps = {
  title: string,
  paragraph: string
  isHighLighted?: boolean
}

const Card = function ({ ...props }: cardProps) {
  return (
    <div className={`card card2 shadow p-3 m-2 ${props.isHighLighted ? 'highLighted' : ''}`} style={{ width: "18rem", display: "inline-block" }}>
      <div className="card-body">
        <img src={`${props.isHighLighted ? icon2 : icon}`} alt="" />
        <h3 className="card-title my-2">{props.title}</h3>
        <p className="card-text">{props.paragraph} </p>
      </div>
    </div>
  )
}

export default Card