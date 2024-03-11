import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const GridCell = ({
  rowIndex,
  colIndex,
  setFocusedCell,
  focusedCell,
  isEditingCell,
  setIsEditingCell,
}) => {
  const [cellValue, setCellValue] = useState("");
  const isFocused = `row-${rowIndex}/col-${colIndex}` === focusedCell;

  const handleClick = () => {
    setFocusedCell(`row-${rowIndex}/col-${colIndex}`);
    setIsEditingCell(false);
  };

  const handleDoubleClick = () => {
    setFocusedCell(`row-${rowIndex}/col-${colIndex}`);
    setIsEditingCell(true);
  };

  const updateCellValue = ({ target: { value } }) => {
    setCellValue(value);
  };
  if (colIndex === 0 && rowIndex === 0) {
    return (
      <div
        className={clsx("border bg-slate-600 w-auto h-[35px] p-1 flex")}
      ></div>
    );
  }
  if (colIndex === 0) {
    return (
      <div className={clsx("border bg-slate-600 w-auto h-[35px] p-1 flex")}>
        {rowIndex}
      </div>
    );
  }
  if (rowIndex === 0) {
    return (
      <div className={clsx("border bg-slate-600 w-auto h-[35px] p-1 flex")}>
        {String.fromCodePoint(64 + colIndex)}
      </div>
    );
  }
  return (
    <div
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      className={clsx("border w-auto h-[35px] p-1 flex", {
        "border-cyan-300 border-2": isFocused,
      })}
    >
      <div className="w-full">
        {isFocused && isEditingCell ? (
          <input
            className="bg-transparent  w-full  h-max outline-none "
            type="text"
            value={cellValue}
            onChange={updateCellValue}
            autoFocus
          />
        ) : (
          <div>{cellValue}</div>
        )}
      </div>
    </div>
  );
};

GridCell.propTypes = {
  rowIndex: PropTypes.number,
  colIndex: PropTypes.number,
  setFocusedCell: PropTypes.func,
  focusedCell: PropTypes.string,
  isEditingCell: PropTypes.bool,
  setIsEditingCell: PropTypes.func,
};

export default GridCell;
