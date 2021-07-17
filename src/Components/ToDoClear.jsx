export default function ToDoClear({ items, onCheckedClear }) {
  let checkedSize = items.filter((item) => item.isChecked).length;
  return (
    <div className="footer">
      <span className="checkedCount">
        {checkedSize}/{items.length}
      </span>
      <button className="clearChecked" onClick={onCheckedClear}>
        Clear Completed
      </button>
    </div>
  );
}
