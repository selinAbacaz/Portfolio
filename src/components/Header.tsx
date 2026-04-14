import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
  
     <nav
  style={{
    backgroundColor: '#6f462bb9',
    color: 'AntiqueWhite',
    padding: '0.5rem 1rem',
    paddingRight: '30px',
    borderRadius: '60px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '30px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    minHeight: '8vh',
    minWidth: '60vw',
    maxWidth: '60vw',
    margin: '1rem auto',
    position: 'sticky',
    top: '50px',
    zIndex: '20',
  }}
>
  <Link
    style={{
      color: 'white',
      fontSize: 29,
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
    to="/about"
    style={{
      color: 'white',
      fontSize: 29,
      fontFamily: 'Inter',
      fontWeight: '400',
      textDecoration: 'none',
    }}
    activeProps={{ className: 'nav-link is-active' }}
  >
    About
  </Link>
</nav>
  )
}
