import { Background } from "../Background"

export function Jumbotron() {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ backgroundColor: "black" }}>
          <Background />
          <div className="container" id="bc">
            <div className="carousel-caption text-start">
              <h1>We Ensure A Best Insurance Service.</h1>
              <p>We know how large objects will act, but things on a <br /> small scale just do not act that way.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Get Quote Now</a></p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}