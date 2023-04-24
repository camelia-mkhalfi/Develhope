import { useMemo } from "react";

export function FilteredList({ items }) {
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.age > 18);
  }, [items]);

  return (
    <div>
      <ul>
        {filteredItems.map((item) => {
          return <li key={item.id}>{item.id}</li>;
        })}
      </ul>
    </div>
  );
}
