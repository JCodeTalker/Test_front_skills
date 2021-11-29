import './styles.scss'
import tel from '../../assets/telephone.svg'
import addr from '../../assets/address.svg'
import email from '../../assets/email.svg'
import faceb from '../../assets/social_media/facebook.svg'
import insta from '../../assets/social_media/instagram.svg'
import twitt from '../../assets/social_media/twitter.svg'


export function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="bootstrap" viewBox="0 0 118 94">
          <title>Bootstrap</title>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
        </symbol>
        <symbol id="facebook" viewBox="0 0 24 23">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5 11.5704C23.5 5.1801 18.3515 0 12.0014 0C5.64848 0.00143732 0.5 5.1801 0.5 11.5719C0.5 17.3456 4.7056 22.1319 10.2019 23V14.9151H7.28415V11.5719H10.2048V9.02062C10.2048 6.12155 11.9224 4.52037 14.5484 4.52037C15.8075 4.52037 17.1226 4.74603 17.1226 4.74603V7.59193H15.6724C14.2451 7.59193 13.7995 8.4845 13.7995 9.40008V11.5704H16.9875L16.4787 14.9136H13.7981V22.9986C19.2944 22.1304 23.5 17.3441 23.5 11.5704Z" fill="#23A6F0" />
        </symbol>
        <symbol id="instagram" viewBox="0 0 23 22">
          <path d="M11.5 0C8.51487 0 8.1395 0.01375 6.96663 0.066C5.79375 0.121 4.99487 0.30525 4.295 0.5775C3.56088 0.853626 2.89593 1.28676 2.34663 1.84663C1.7871 2.39621 1.35402 3.06108 1.0775 3.795C0.80525 4.4935 0.619625 5.29375 0.566 6.4625C0.51375 7.63812 0.5 8.01213 0.5 11.0014C0.5 13.9879 0.51375 14.3619 0.566 15.5348C0.621 16.7063 0.80525 17.5051 1.0775 18.205C1.35937 18.9282 1.73475 19.5415 2.34663 20.1534C2.95713 20.7652 3.57038 21.142 4.29363 21.4225C4.99488 21.6947 5.79238 21.8804 6.96388 21.934C8.13813 21.9862 8.51212 22 11.5 22C14.4879 22 14.8605 21.9862 16.0348 21.934C17.2049 21.879 18.0065 21.6947 18.7064 21.4225C19.44 21.1462 20.1045 20.7131 20.6534 20.1534C21.2652 19.5415 21.6406 18.9282 21.9225 18.205C22.1934 17.5051 22.379 16.7063 22.434 15.5348C22.4862 14.3619 22.5 13.9879 22.5 11C22.5 8.01212 22.4862 7.63813 22.434 6.46388C22.379 5.29375 22.1934 4.4935 21.9225 3.795C21.646 3.06106 21.2129 2.39618 20.6534 1.84663C20.1042 1.28655 19.4392 0.853387 18.705 0.5775C18.0037 0.30525 17.2035 0.119625 16.0334 0.066C14.8591 0.01375 14.4865 0 11.4973 0H11.5014H11.5ZM10.5141 1.98275H11.5014C14.4384 1.98275 14.7862 1.99238 15.9454 2.046C17.0179 2.09413 17.6009 2.27425 17.9886 2.42413C18.5015 2.6235 18.8686 2.86275 19.2536 3.24775C19.6386 3.63275 19.8765 3.9985 20.0759 4.51275C20.2271 4.89913 20.4059 5.48213 20.454 6.55463C20.5076 7.71375 20.5186 8.06163 20.5186 10.9973C20.5186 13.9329 20.5076 14.2821 20.454 15.4412C20.4059 16.5137 20.2258 17.0954 20.0759 17.4831C19.8995 17.9607 19.618 18.3926 19.2522 18.7467C18.8672 19.1317 18.5015 19.3696 17.9873 19.569C17.6023 19.7203 17.0192 19.899 15.9454 19.9485C14.7862 20.0008 14.4384 20.0131 11.5014 20.0131C8.56438 20.0131 8.21513 20.0008 7.056 19.9485C5.9835 19.899 5.40187 19.7203 5.01412 19.569C4.53631 19.3929 4.10405 19.1119 3.74912 18.7467C3.38303 18.392 3.10112 17.9598 2.92413 17.4817C2.77425 17.0954 2.59413 16.5124 2.546 15.4399C2.49375 14.2808 2.48275 13.9329 2.48275 10.9945C2.48275 8.0575 2.49375 7.711 2.546 6.55187C2.5955 5.47937 2.77425 4.89638 2.9255 4.50863C3.12488 3.99575 3.36412 3.62862 3.74912 3.24362C4.13412 2.85862 4.49987 2.62075 5.01412 2.42138C5.40187 2.27013 5.9835 2.09138 7.056 2.04188C8.07075 1.99513 8.464 1.98138 10.5141 1.98V1.98275V1.98275ZM17.3726 3.80875C17.1993 3.80875 17.0276 3.84289 16.8675 3.90923C16.7073 3.97557 16.5618 4.0728 16.4392 4.19537C16.3167 4.31794 16.2194 4.46346 16.1531 4.62361C16.0868 4.78376 16.0526 4.95541 16.0526 5.12875C16.0526 5.30209 16.0868 5.47374 16.1531 5.63389C16.2194 5.79404 16.3167 5.93956 16.4392 6.06213C16.5618 6.1847 16.7073 6.28193 16.8675 6.34827C17.0276 6.41461 17.1993 6.44875 17.3726 6.44875C17.7227 6.44875 18.0585 6.30968 18.306 6.06213C18.5536 5.81458 18.6926 5.47884 18.6926 5.12875C18.6926 4.77866 18.5536 4.44292 18.306 4.19537C18.0585 3.94782 17.7227 3.80875 17.3726 3.80875V3.80875ZM11.5014 5.3515C10.7521 5.33981 10.008 5.47729 9.31234 5.75594C8.61671 6.0346 7.98346 6.44885 7.44946 6.97458C6.91546 7.50032 6.49138 8.12703 6.20191 8.81823C5.91244 9.50944 5.76336 10.2513 5.76336 11.0007C5.76336 11.7501 5.91244 12.4919 6.20191 13.1831C6.49138 13.8743 6.91546 14.5011 7.44946 15.0268C7.98346 15.5525 8.61671 15.9668 9.31234 16.2454C10.008 16.5241 10.7521 16.6616 11.5014 16.6499C12.9844 16.6267 14.3988 16.0214 15.4393 14.9645C16.4799 13.9076 17.0631 12.4839 17.0631 11.0007C17.0631 9.51751 16.4799 8.09382 15.4393 7.03691C14.3988 5.97999 12.9844 5.37464 11.5014 5.3515V5.3515ZM11.5014 7.33288C12.474 7.33288 13.4067 7.71923 14.0944 8.40695C14.7821 9.09467 15.1685 10.0274 15.1685 11C15.1685 11.9726 14.7821 12.9053 14.0944 13.593C13.4067 14.2808 12.474 14.6671 11.5014 14.6671C10.5288 14.6671 9.59605 14.2808 8.90833 13.593C8.22061 12.9053 7.83425 11.9726 7.83425 11C7.83425 10.0274 8.22061 9.09467 8.90833 8.40695C9.59605 7.71923 10.5288 7.33288 11.5014 7.33288V7.33288Z" fill="#23A6F0" />
        </symbol>
        <symbol id="twitter" viewBox="0 0 23 18">
          <path d="M7.41075 18C15.713 18 20.2546 11.0731 20.2546 5.07669C20.2546 4.88285 20.2546 4.68625 20.2464 4.49241C21.1306 3.84789 21.8937 3.04993 22.5 2.13592C21.6741 2.50262 20.7988 2.7443 19.9026 2.85312C20.8466 2.28495 21.5536 1.391 21.8922 0.337403C21.0054 0.86647 20.0346 1.23787 19.0226 1.43534C18.3422 0.705724 17.4419 0.222372 16.4611 0.0601592C15.4803 -0.102054 14.4737 0.0659244 13.5973 0.538075C12.7209 1.01023 12.0236 1.7602 11.6134 2.67182C11.2031 3.58345 11.1029 4.60585 11.3281 5.58066C9.53339 5.49005 7.77762 5.02057 6.17468 4.20269C4.57175 3.3848 3.15744 2.23678 2.0235 0.833069C1.44784 1.83421 1.27216 3.01843 1.53214 4.14526C1.79211 5.27209 2.46825 6.25705 3.42325 6.90013C2.70762 6.87565 2.00772 6.68215 1.38 6.33524V6.39754C1.38123 7.44631 1.74205 8.46247 2.40145 9.27429C3.06086 10.0861 3.9784 10.6438 4.999 10.853C4.61161 10.9605 4.21144 11.014 3.80963 11.0122C3.52635 11.0131 3.24365 10.9867 2.96537 10.9333C3.25383 11.8361 3.8155 12.6254 4.57171 13.1908C5.32793 13.7561 6.24081 14.0691 7.1825 14.0859C5.58276 15.3511 3.60668 16.0373 1.5725 16.034C1.21407 16.0355 0.855882 16.0147 0.5 15.9716C2.56458 17.297 4.96228 18.0008 7.41075 18V18Z" fill="#23A6F0" />
        </symbol>
      </svg>



      <div className="container-fluid" style={{ backgroundColor: 'white' }} >
        <div className="container-md">
          <footer className="py-5" id="footer">
            <div className="row">
              <div className="col-2">
                <h5 className="h5-footer">Company info</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About Us</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Carrier</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">We are hiring</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
                </ul>
              </div>

              <div className="col-2">
                <h5 className="h5-footer">Legal</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About Us</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Carrier</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">We are hiring</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
                </ul>
              </div>

              <div className="col-2">
                <h5 className="h5-footer">Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Business Marketing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">User Analytic</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Live Chat</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Unlimited Support</a></li>
                </ul>
              </div>

              <div className="col-2">
                <h5 className="h5-footer">Resources</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">IOS &amp; Android</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Watch a Demo</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Customers</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">API</a></li>
                </ul>
              </div>

              <div className="col-2">
                <h5 className="h5-footer">Get In Touch</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"> <a href="#" className="nav-link p-0 text-muted text-nowrap">  <img src={tel} alt="" /> (480) 555-0103</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted text-nowrap">  <img src={addr} alt="" /> 4517 Washington Ave.</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted text-nowrap">  <img src={email} alt="" /> debra.holt@example.com</a></li>
                </ul>
              </div>

            </div>



          </footer>
        </div>
      </div>

      <div className="container">
        <div className="d-flex justify-content-between pt-4 border-top end-footer">
          <p>&copy; Made by Jones Soares - All Rights Reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter" /></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram" /></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook" /></svg></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}