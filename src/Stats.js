export default function Stats({ items }) {
  if (!items.length) {
    return <p className="stats"><em>Start adding some items to your packing list 🚀</em></p>;
  }
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPackedItems / numItems) * 100);
  
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You are fully packed and you are ready to go! ✈️"
          : `😍You have ${numItems} items on your list, and you already packed ${numPackedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
