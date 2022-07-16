interface CounterProps {
  count: number
  add: () => void
  remove: () => void
}

export const Counter: React.SFC<CounterProps> = ({ count, add, remove }) => {
  const onAdd = () => add()
  const onRemove = () => remove()
  return (
    <div className="counter">
      <h2 data-testid="counter-output">Count: {count}</h2>
      <button onClick={onAdd}>Add</button>
      <button onClick={onRemove}>Remove</button>
    </div>
  )
}
