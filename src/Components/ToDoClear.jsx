export default function ToDoClear({
  items,
  onCheckedClear,
  handelCheckedAll,
}) {
  let checkedSize = items.filter((item) => item.isChecked).length;
  return (
    <div className="footer">
      <span className="checkedCount">
        {checkedSize}/{items.length}
      </span>
      <button className="check" onClick={handelCheckedAll}>
        Mark All
      </button>
      <button className="clearChecked" onClick={onCheckedClear}>
        Clear Completed
      </button>
    </div>
  );
}
