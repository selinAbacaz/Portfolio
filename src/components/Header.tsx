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
  <Link className= "button"
    style={{
      color: 'white',
      fontSize: 22,
      fontFamily: 'Inter',
      fontWeight: '400',
      textDecoration: 'none',
    }}
    to="/"
    activeProps={{ className: 'nav-link is-active' }}
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
    activeProps={{ className: 'nav-link is-active' }}
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
    activeProps={{ className: 'nav-link is-active' }}
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
    activeProps={{ className: 'nav-link is-active' }}
  >
    Find Me
  </Link>


</nav>
  )
}
