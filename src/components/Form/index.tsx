import './styles.scss'
import apppointment from '../../assets/appointment.svg'
import countries from '../../assets/countries.svg'
import useWindowDimension from '../../hooks/useWindowDimension'
import { useEffect, useState } from 'react'

export function Form() {

  const { height, width } = useWindowDimension()
  const [visibility, setVisibility] = useState('')

  useEffect(() => {
    if (width <= 768) {
      setVisibility('none')
    } else {
      setVisibility('block')
    }
  }, [width])

  return (
    <>
      <div className="container-fluid" id="bg" style={{ display: `${visibility}` }} >
        <div className="container">
          <div className="row py-5">
            <div className="col me-5 my-3" id="branch-world-text">
              <h2>
                We Have Branches All
                Over The World
              </h2>
              <p>
                The gradual accumulation of information about atomic and
                small-scale behaviour during the first quarter of the 20th
                century, which gave some indications about how small things
                do behave, produced an increasing confusion which was
                Heisenberg, and Born.
              </p>
            </div>
            <div className="col my-4">
              <img src={countries} alt="" />
            </div>
          </div>


          <div className="row">
            <div className="col">



              <div className="card mb-3 mx-auto" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4" >
                    <img src={apppointment} style={{ height: '100%' }} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-5">
                      <h5 className="card-title">Book Appointment</h5>
                      <form>
                        <div className="mb-3">
                          <label htmlFor="inputName" className="form-label">Name *</label>
                          <input type="text" className="form-control" id="inputName" placeholder="Full Name *" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">Email Address *</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="departm">Department *</label>
                          <select className="form-select" aria-label="Default select example" id="departm">
                            <option selected>Please select</option>
                            <option value="1">Department A</option>
                            <option value="2">Department B</option>
                            <option value="3">Department C</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="time">Time *</label>
                          <select className="form-select" aria-label="Default select example" id="time">
                            <option selected>4:00 available</option>
                            <option value="1">5:00 available</option>
                            <option value="2">6:00 available</option>
                          </select>
                        </div>
                        <div className="d-grid gap-2">
                          <button type="submit" className="btn btn-primary">Book Appointment</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /> <br /> <br />
    </>
  )
}