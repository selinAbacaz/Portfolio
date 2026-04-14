
import Header from '#/components/Header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  return (
    < div style={{ minHeight: '100vh', backgroundColor: 'antiquewhite' }} >
      <Header></Header>
      
    </div>
  )
}
