import { Link } from '@tanstack/react-router'
import './Header.css'
import example from "../images/resumeWebsite.pdf"


export default function Header() {
  return (
  
  <nav
  style={{
  position: 'fixed',
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'rgba(92, 52, 13, 0.85)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  color: 'AntiqueWhite',
  padding: '0.5rem 1.5rem',
  borderRadius: '60px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '25px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  zIndex: 9999
}}
>
  <a className= "button active"
    style={{
      
    
      fontSize: 22,
      fontFamily: 'Inter',
      fontWeight: '400',
      textDecoration: 'none',
      color: "var(--myYellow)"
      
    }}
    href= {example} download= "SelinBacazResume"
    
  >
    Download my Resume
  </a>

  <Link className= "button active"
    style={{
      color: 'white',
    
      fontSize: 22,
      fontFamily: 'Inter',
      fontWeight: '400',
      textDecoration: 'none',
    }}
    to="/"
    activeProps={{ className: 'nav-link is-active', style: { backgroundColor: '#915C27' } }}
  >
    Home
  </Link>

  <Link
  className= "button"
    to="/about"
    style={{
      color: 'white',
      fontSize: 22,
      fontFamily: 'Inter',
      fontWeight: '400',
      textDecoration: 'none',
    }}
    activeProps={{ className: 'nav-link is-active', style: { backgroundColor: '#915C27' } }}
  >
    About
  </Link>

  <Link 
  className= "button"
  to= "/"
  href="#FeaturedPortfolio"
  style={{
      color: 'white',
      fontSize: 22,
      fontFamily: 'Inter',
      fontWeight: '400',
      textDecoration: 'none',
      
    }}>Projects</Link>

  <Link
  className= "button"
    to="/findMe"
    style={{
      color: 'white',
      fontSize: 22,
      fontFamily: 'Inter',
      fontWeight: '400',
      textDecoration: 'none',
    }}
    activeProps={{ className: 'nav-link is-active', style: { backgroundColor: '#915C27' } }}
  >
    Find Me
  </Link>


</nav>
  )
}
