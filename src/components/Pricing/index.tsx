import './styles.scss'
import nchecked from '../../assets/not-checked.svg'
import checked from '../../assets/checked.svg'

const Pricing = () => {
  return (
    <div className="container">
      <header>

        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Pricing</h1>
          <p className="fs-5 text-muted">Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
      </header>

      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3" >

          <div className="col-md-4 centralize-children">
            <div className="card card2 border-info mb-4 rounded-3 shadow-sm p-3 text-center" style={{ display: 'inline-block' }}>
              <div className="card-header" style={{ backgroundColor: 'white', borderBottom: 'none' }}>
                <h4 className="my-0 fw-normal">Free</h4>
                <h5 className="h5-pricing">Organize across all
                  apps by hand</h5>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title fw-bolder">$0<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">

                  <li><img src={checked} alt="" className="me-2 my-1" />Unlimited product updates</li>
                  <li><img src={checked} alt="" className="me-2 my-1" />Unlimited product updates</li>
                  <li><img src={checked} alt="" className="me-2 my-1" />Unlimited product updates</li>
                  <li><img src={nchecked} alt="" className="me-2 my-1" />1GB Cloud storage</li>
                  <li><img src={nchecked} alt="" className="me-2 my-1" />Email and community support</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Try for free</button>
              </div>
            </div>
          </div>



          <div className="col-md-4 centralize-children">
            <div className="card card2 border-info mb-4 rounded-3 shadow-sm p-3 text-center" style={{ display: 'inline-block' }} id="best-sale" >
              <div className="card-header" style={{ borderBottom: 'none' }}>
                <h4 className="my-0 fw-normal" >Standard</h4>
                <h5 className="h5-pricing">Organize across all
                  apps by hand</h5>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title fw-bolder">$9.99<small className="text-muted fw-light">per month</small></h1>
                <ul className="list-unstyled mt-3 mb-4">

                  <li><img src={checked} alt="" className="me-2 my-1" />Unlimited product updates</li>
                  <li><img src={checked} alt="" className="me-2 my-1" />Unlimited product updates</li>
                  <li><img src={checked} alt="" className="me-2 my-1" />Unlimited product updates</li>
                  <li><img src={nchecked} alt="" className="me-2 my-1" />1GB Cloud storage</li>
                  <li><img src={nchecked} alt="" className="me-2 my-1" />Email and community support</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Try for free</button>
              </div>
            </div>
          </div>


          <div className="col-md-4 centralize-children">
            <div className="card card2 border-info mb-4 rounded-3 shadow-sm p-3 text-center" style={{ display: 'inline-block' }}>
              <div className="card-header" style={{ backgroundColor: 'white', borderBottom: 'none' }}>
                <h4 className="my-0 fw-normal">Premium</h4>
                <h5 className="h5-pricing">Organize across all
                  apps by hand</h5>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title fw-bolder">$19.99<small className="text-muted fw-light">/per month</small></h1>
                <ul className="list-unstyled mt-3 mb-4">

                  <li><img src={checked} alt="" className="me-2 my-1" />Unlimited product updates</li>
                  <li><img src={checked} alt="" className="me-2 my-1" />Unlimited product updates</li>
                  <li><img src={checked} alt="" className="me-2 my-1" />Unlimited product updates</li>
                  <li><img src={nchecked} alt="" className="me-2 my-1" />1GB Cloud storage</li>
                  <li><img src={nchecked} alt="" className="me-2 my-1" />Email and community support</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Try for free</button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Pricing