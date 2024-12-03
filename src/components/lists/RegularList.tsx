export default function TodoList<T>({
  items,
  sourceName,
  ItemComponent,
}: {
  items: T[];
  sourceName: string;
  ItemComponent: React.ElementType;
}) {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [sourceName]: item }} />
      ))}
    </>
  );
}
