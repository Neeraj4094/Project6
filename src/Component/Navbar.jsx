
import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
export default function Nav1(){


  // const LoginButton = () => {
    const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
  
    // return <button onClick={() => loginWithRedirect()}>Log In</button>;
  // };
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
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white cursor-pointer">
      Flowbite
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
      >
        
      <Link to="/" style={{color:"black"}}>Home</Link>
    </Navbar.Link>
    <Navbar.Link
      
      to="/navbars"
    >
      <Link to="/About" style={{color:"black"}}>About</Link>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      <Link to="/Services" style={{color:"black"}}>Services</Link>
    </Navbar.Link>
    {/* <Navbar.Link href="/navbars">
      <Link to="/Pricing">Pricing</Link>
    </Navbar.Link> */}
    {/* <Navbar.Link href="/navbars">
      <Link to="/Contact">Contact</Link>
    </Navbar.Link> */}
    <Navbar.Link href="/navbars">
      
    
    <div>
    <li>
      {isAuthenticated && <p> {user.name}</p>}
    </li>
    {
      isAuthenticated ? (
        <li>
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      <Link style={{color:"black"}}>Log Out</Link>
      Log Out
    </button>
    </li>
      ) : (

    <li>
       <button onClick={() => loginWithRedirect()}><Link style={{color:"black"}}>Login</Link></button>
    </li>
      )
    }
    </div>
    </Navbar.Link>
  </Navbar.Collapse>
  </Navbar>
  
</>
    )
}
