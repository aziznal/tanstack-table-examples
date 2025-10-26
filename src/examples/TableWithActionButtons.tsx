import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { LucideHeart, LucideTrash } from 'lucide-react';

type User = {
  id: string;
  name: string;
  email: string;
  age: number;
};

const initialUsers: Array<User> = [
  {
    id: '1',
    name: 'John',
    email: 'john@mail.com',
    age: 29,
  },
  {
    id: '2',
    name: 'Jane',
    email: 'jane@mail.com',
    age: 32,
  },
];

const columnHelper = createColumnHelper<User>();

export const TableWithActionButtons: React.FC = () => {
  const [users, setUsers] = useState(initialUsers);

  const table = useReactTable({
    data: users,
    columns: [
      columnHelper.accessor('id', {
        cell: (props) => <div>{props.getValue()}</div>,
      }),

      columnHelper.accessor('name', {
        cell: (props) => <div>{props.getValue()}</div>,
      }),

      columnHelper.accessor('age', {
        cell: (props) => <div>{props.getValue()}</div>,
      }),

      {
        accessorKey: 'action',
        cell: (props) => (
          <button
            className="w-fit h-fit"
            onClick={() =>
              setUsers((current) =>
                current.filter((u) => u.id !== props.row.original.id),
              )
            }
          >
            <LucideTrash size="20" />
          </button>
        ),
      },

      {
        accessorKey: 'favorite',
        cell: (props) => (
          <button
            className="w-fit h-fit"
            onClick={() =>
              setUsers((current) =>
                current.filter((u) => u.id !== props.row.original.id),
              )
            }
          >
            <LucideHeart size="20" />
          </button>
        ),
      },
    ],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <h1 className="mb-2 font-bold font-mono">With actions</h1>

      <table>
        <thead>
          <tr>
            {table.getAllColumns().map((col) => (
              <th key={col.id} className="group">
                <div className="w-[100px] outline p-2 group-first:rounded-tl group-last:rounded-tr">
                  {col.id}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="min-w-[200px] group/row">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="group/cell">
                  <div className="group-last/row:group-last/cell:rounded-br group-last/row:group-first/cell:rounded-bl border p-2 w-[100px]">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
