
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  return (
    < html lang="en" suppressHydrationWarning style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'antiquewhite' }} >
      
      <body></body>
      
    </html>
  )
}
