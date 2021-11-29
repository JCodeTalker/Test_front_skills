import './styles.scss'
import { Header } from "../Header";
import Card from "../Card";
import useWindowDimensions from '../../hooks/useWindowDimension';
import { useEffect, useState } from 'react';


export function Jumbotron() {

  const { width } = useWindowDimensions()
  const [margin, setMargin] = useState("80px")
  const [mp, setMp] = useState("p-5 m-5")
  const [cardWidth, setWidth] = useState("50vw")

  useEffect(() => {
    if (width <= 768) {
      setMargin("500px")
      setMp("")
      setWidth("90vw")
    } else {
      setWidth("50vw")
      setMargin("80px")
      setMp("p-5 m-5")
    }
  }, [width])
  return (
    <div >
      <div className="container-fluid" id="header2" style={{ height: '100vh', marginBottom: `${margin}` }}>
        <Header />
        <div className="container">

          <div className="row mx-auto" style={{ width: `${cardWidth}` }} >
            <div className={`main-content text-center ${mp}`}>
              <h1>We Ensure A Best Insurance Service</h1>
              <h4>We know how large objects will act, but things on a
                small scale just do not act that way.</h4>
            </div>
          </div>

          <div className="row" style={{ marginTop: '35px' }}>
            <div className="container" id="card-container" >
              <div className="row">
                <div className="col-md-4 bottom-0 centralize-children" >
                  <Card title="Peace of Mind" paragraph="the quick fox jumps over the 
lazy dog" />
                </div>
                <div className="col-md-4 centralize-children">
                  <Card title="Set For Life" paragraph="the quick fox jumps over the 
lazy dog"/>
                </div>
                <div className="col-md-4 centralize-children">
                  <Card title="100% Satisfaction" isHighLighted={true} paragraph="the quick fox jumps over the 
lazy dog"/>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <br /><br /> <br />
    </div>
  )
}