import { createFileRoute } from '@tanstack/react-router';
import { LucideGitBranch } from 'lucide-react';
import { BasicTableExample } from '@/examples/BasicTableExample';
import { TableWithActionButtons } from '@/examples/TableWithActionButtons';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <div className="min-h-dvh py-12 mx-auto w-[600px]">
      <header>
        <h1 className="text-4xl mb-12">Tanstack table examples</h1>
      </header>

      <main className="flex flex-col gap-16">
        <BasicTableExample />

        <TableWithActionButtons />
      </main>

      <footer className="flex flex-col items-center justify-center mt-12 gap-2">
        <a
          href="https://github.com/aziznal/tanstack-table-examples"
          className="flex gap-1 items-center underline underline-offset-4 text-purple-700"
          target="_blank"
        >
          <span>Github repo </span>{' '}
          <LucideGitBranch className="size-[1.4cap]" />
        </a>

        <span>
          Made by{' '}
          <a
            className="underline underline-offset-4 text-rose-600 font-bold"
            href="https://aziznal.com"
            target="_blank"
          >
            aziznal
          </a>
        </span>
      </footer>
    </div>
  );
}
