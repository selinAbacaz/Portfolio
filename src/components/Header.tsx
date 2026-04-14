import { Link } from '@tanstack/react-router'
import './Header.css'

export default function Header() {
  return (
  
     <nav
  style={{
    backgroundColor: '#5C340D',
    color: 'AntiqueWhite',
    padding: '0.5rem 1rem',
    paddingRight: '60px',
    borderRadius: '60px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: '0px auto 0 auto',
    gap: '30px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    minHeight: '8vh',
    minWidth: '60vw',
    maxWidth: 'fit-content',
    position: 'sticky',
    top: '50px',
    zIndex: '100',
  }}
>
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
    to="/portfolio"
    style={{
      color: 'white',
      fontSize: 22,
      fontFamily: 'Inter',
      fontWeight: '400',
      textDecoration: 'none',
    }}
    activeProps={{ className: 'nav-link is-active', style: { backgroundColor: '#915C27' } }}
  >
    Portfolio
  </Link>

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
