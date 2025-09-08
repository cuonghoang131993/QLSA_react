interface TableProps<T> {
  columns: string[];
  items: T[];
}

export default function Table<
  T extends {
    id: string;
    name: string;
  }
>({ columns, items }: TableProps<T>) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th scope="col" className="px-6 py-3">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((typeItem) => (
            <tr
              key={`type-${typeItem.id}`}
              className="bg-white border-b border-gray-200"
            >
              {(Object.keys(typeItem) as Array<keyof T>).map((k) => {
                if (k === "id")
                  return (
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {typeItem.id}
                    </th>
                  );

                return <td className="px-6 py-4"><span className="whitespace-pre-wrap">{`${typeItem[k] ?? ''}`}</span></td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
