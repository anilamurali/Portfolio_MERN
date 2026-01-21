import React, { useState } from 'react'
import '../Header/Header.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-scroll';

function Header({ lightMode, setLightMode, textColor }) {


  const [showBasic, setShowBasic] = useState(false);

  return (
    <div >
      <MDBNavbar className='shadow-none  fixed-top' expand='lg' light style={!lightMode ? { background: textColor.dark_color } : { background: textColor.light_color }}>
        <MDBContainer >
          <MDBNavbarBrand href='#' light style={!lightMode ? { color: textColor.dark_text, fontSize: '35px' } : { color: textColor.light_text, fontSize: '35px' }}><span>A</span>nila<span>M</span>urali </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink className='mx-4' active aria-current='page' href='#' style={!lightMode ? { color: textColor.dark_text, fontSize: '18px' } : { color: textColor.light_text, fontSize: '18px' }}>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' ><Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                  style={!lightMode ? { color: textColor.dark_text, fontSize: '18px' } : { color: textColor.light_text, fontSize: '18px' }}>About</Link></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'><Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                  className='mx-4' style={!lightMode ? { color: textColor.dark_text, fontSize: '18px' } : { color: textColor.light_text, fontSize: '18px' }}>Skills</Link></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'><Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                  className='mx-4 ' style={!lightMode ? { color: textColor.dark_text, fontSize: '18px' } : { color: textColor.light_text, fontSize: '18px' }}>Projects</Link></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'><Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300} className='mx-4' style={!lightMode ? { color: textColor.dark_text, fontSize: '18px' } : { color: textColor.light_text, fontSize: '18px' }}>Contact</Link></MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>

            <div className='d-flex input-group w-auto'>
              {
                !lightMode ? <i onClick={() => setLightMode(true)} class="fa-solid fa-xl fa-sun fa-beat" style={{ color: textColor.dark_text }}></i> :
                  <i onClick={() => setLightMode(false)} class="fa-solid fa-xl fa-sun fa-beat" style={{ color: textColor.light_text }}></i>
              }

            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header