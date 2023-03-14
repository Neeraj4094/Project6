
import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"

export default function Nav1(){

    return (


        <>
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand
    
    to="/navbars"
    >
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
      />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
      >
      <Link to="/home">Home</Link>
    </Navbar.Link>
    <Navbar.Link
      
      to="/navbars"
    >
      <Link to="/About">About</Link>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      <Link to="/Services">Services</Link>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      <Link to="/Pricing">Pricing</Link>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      <Link to="/Contact">Contact</Link>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      <Link to="/Login">Login</Link>
    </Navbar.Link>
  </Navbar.Collapse>
  </Navbar>
  
</>
    )
}
