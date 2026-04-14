import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/findMe')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/findMe"!</div>
}
