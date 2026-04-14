import Header from '#/components/Header'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/findMe')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  
  < div style={{ minHeight: '100vh', backgroundColor: 'antiquewhite' }} >
        <Header></Header>
        
  </div>
)
}
