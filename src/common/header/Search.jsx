import React from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';





const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      {/* <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
          
            <h5>Trust Software</h5>
          </div>

          <div class="input-group">
            <div class="form-outline" data-mdb-input-init>
              <input type="search" id="form1" class="input-box" />
              <label class="form-label" for="form1">Search</label>
            </div>
            <button type="button" class="btn btn-primary" data-mdb-ripple-init>
              <i class="fas fa-search"></i>
            </button>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section> */}




      {/* hfopeirtufyoert */}


      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/" style={{ fontWeight: 'bold' }} >Trust Software</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-center"
              style={{ maxHeight: '130px' }}
              navbarScroll
            >

              <Form className="d-flex text-center ml-5">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"


                />
                <Button variant="outline-primary">Search</Button>
              </Form>


              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <Nav.Link href="/" style={{ fontWeight: '500' }} >Home</Nav.Link>
              {/* <Nav.Link href="pages">Page</Nav.Link>
              <Nav.Link href="user">User Account</Nav.Link>
              <Nav.Link href="vendor">Vender Account</Nav.Link>
              <Nav.Link href="track">Track my order</Nav.Link> */}
              {/* <Nav.Link to="/contactus" style={{fontWeight:'500'}}>Contact Us</Nav.Link> */}

              <Link className='contact-text' to='/contactus' style={{ fontWeight: '500' }}>
                Contact Us
              </Link>



            </Nav>
            <div className='icon f_flex width'>

              <div className='cart'>
                <Link to='/signup'>
                  <i className='fa fa-user icon-circle'></i>
                </Link>

                <Link to='/cart'>
                  <i className='fa fa-shopping-bag icon-circle'></i>
                  <span className="fffff">{CartItem.length === 0 ? "" : CartItem.length} </span>
                </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>







    </>
  )
}

export default Search
