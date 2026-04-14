import Header from '../components/Header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
  < div style={{ minHeight: '100vh', backgroundColor: 'antiquewhite' }} >
    <Header></Header>
        
  </div>
  )
}
