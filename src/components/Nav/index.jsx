import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar} from 'react-bootstrap';
import { BsJustify } from 'react-icons/bs';
import './style.css'
function Navb() {
    return (
        <header >
            <Navbar bg="dark" expand="sm" vari="flex justify-center" >
                <Container className="py-2">
                    <Link to="/" className="no-underline text-2xl font-bold rounded hover:text-yellow-500 text-yellow-500 ">Movies&Series</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"> <BsJustify className="text-gray-100 text-2xl"/> </Navbar.Toggle> 
                    <Navbar.Collapse id="basic-navbar-nav" className="sm:ml-10">
                        <div className="flex justify-center">
                            <Nav className="pt-1">
                            <Link to="/movies/top250movies" className="w-32 sm:w-46 mb-2 sm:mb-0 mr-10 sm:px-3 sm:py-1 text-yellow-500 hover:text-white durations-300 border-1 border-yellow-500 hover:bg-yellow-500  rounded text-base font-bold  no-underline text-center">Movies</Link>
                            <Link to="/series/top250series" className="w-32 sm:w-46 mb-2 sm:mb-0 mr-10 sm:px-3 sm:py-1 text-yellow-500 hover:text-white durations-300 border-1 border-yellow-500 hover:bg-yellow-500 rounded text-base font-bold  no-underline text-center">Series</Link>
                            <Link to="/comingsoon" className="w-32 sm:w-46 mb-2 sm:mb-0 mr-10 sm:px-3 sm:py-1 text-yellow-500 hover:text-white durations-300 border-1 border-yellow-500 hover:bg-yellow-500 rounded text-base font-bold  no-underline text-center">Coming Soon</Link>
                        </Nav>
                        </div>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}

export default Navb
