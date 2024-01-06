import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted mt-3'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='text-light' style={{ fontWeight: 'bold' }} >Get connected with us on social networks:</span>
        </div>

        <div className='text-light'>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>

          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>

        </div>
      </section>

      <section className='fluid '>
        <MDBContainer className='d-flex justify-content-center  text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol className='mx-auto mb-4 col-12'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>
                <MDBIcon icon="gem" className="me-3" />
                Trust Software
              </h6>
              <p className='text-light ' style={{ fontWeight: 'bold' }}>
                Bitcoin Flash Software. Feel free to contact me for any types
                of FLASH Software like BTS FLASH, DTH FLASH,  BANK FLASH SWIFT TRANSFER, SS7 OTP BYPASS
              </p>
            </MDBCol>
            {/* 
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol col='6' className='mx-auto mb-md-0 mb-4 text-light'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Pallavaram, chennai, Tamilnadu India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                trustsoftware.admin@proton.me
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +1(910) 701-5834
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2025 Copyright:
        <a className='text-reset fw-bold' href=''>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}