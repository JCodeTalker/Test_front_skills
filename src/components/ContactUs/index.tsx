import useTextPositionConfig from "../../hooks/useTextPositionConfig"

export function ContactUs() {

  const textPosition = useTextPositionConfig()

  return (
    <div className="container mb-5">
      <div className="row mx-auto">
        <div className="col-md-9 text-nowrap">
          <h3 className={`fw-bold ${textPosition}`} style={{ color: '#252B42' }}>
            Consulting Agency For Your Business
          </h3>
          <p className={`${textPosition}`} >the quick fox jumps over the lazy dog</p>
        </div>
        <div className="col-md-3 left-100 centralize-children">
          <button className="btn btn-primary py-3 px-5">Contact Us</button>
        </div>
      </div>
    </div>
  )
}