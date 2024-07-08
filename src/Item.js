export default function Item({ item, onDeleteItem }) {
  return (
    <li key={item.id}>
      <input type="checkbox" checked={item.packed} />
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description} </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
