import { createFileRoute } from '@tanstack/react-router'
import { BasicTableExample } from '@/examples/BasicTableExample'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return <div className="min-h-dvh flex flex-col gap-8 p-24">
    <BasicTableExample />
  </div>
}
